import datetime
import threading
from typing import Dict, List, Tuple


class TimePeriod:

    __slots__ = ("start", "end")

    def __init__(self, start: datetime.datetime, end: datetime.datetime) -> None:
        if start > end:
            raise ValueError("Start time must be before end time")

        self.start = start
        self.end = end
    
    def __str__(self) -> str:
        return f"{self.start} - {self.end}"
    
    def __repr__(self) -> str:
        return self.__str__()


class Booking:

    __slots__ = ("name", "phone_number", "time_start", "time_end")

    def __init__(self, name: str, phone_number: str, period: TimePeriod) -> None:
        self.name = name
        self.phone_number = phone_number
        self.time_start = period.start
        self.time_end = period.end
    
    def __str__(self) -> str:
        return f"<{self.name} ({self.phone_number}) {self.time_start} - {self.time_end}>"

    def __repr__(self) -> str:
        return self.__str__()


class Day:

    __slots__ = ("date", "bookings")

    def __init__(self, date: datetime.date) -> None:
        self.date = date
        self.bookings: List[Booking] = []
    

    def get_already_booked(self, period: TimePeriod) -> List[TimePeriod]:
        already_booked: List[TimePeriod] = []

        for i in range(len(self.bookings)):
            # Continue until the start of the time period
            if self.bookings[i].time_end < period.start:
                continue
            
            # Add the booked hours in the period to the list 
            for booking in self.bookings[i:]:
                if booking.time_start < period.end:
                    already_booked.append(TimePeriod(booking.time_start, booking.time_end))
                else:
                    break

            break
        
        return already_booked
    
    
    def insert_booking(self, new_booking: Booking) -> None:
        # Use linear search to insert the new booking in the right spot

        if len(self.bookings) == 0 or self.bookings[0].time_start > new_booking.time_end:
            self.bookings.append(new_booking)
            return
        
        for i in range(len(self.bookings)):
            if new_booking.time_start >= self.bookings[i].time_end \
                and (i+1 == len(self.bookings) \
                    or new_booking.time_end <= self.bookings[i+1].time_start):

                self.bookings.insert(i+1, new_booking)
                return
        
        raise ValueError(f"Could not insert booking\nBooking: {new_booking}\nSlot: {self}")


    def __str__(self) -> str:
        string = f"{self.date}:\n"
        for booking in self.bookings:
            string += f"\t\t{booking}\n"
        return string

    def __repr__(self) -> str:
        return self.__str__()


class Slot:

    __slots__ = ("days", "lock", "id")

    def __init__(self, id: int) -> None:
        self.days: Dict[datetime.date, Day] = {}
        self.lock = threading.Lock()
        self.id = id
    

    def clean_days(self) -> None:
        # Remove past days
        today = datetime.date.today()
        for date in list(self.days.keys()):
            if date < today:
                del self.days[date]
    

    def get_already_booked(self, period: TimePeriod) -> List[TimePeriod]:
        with self.lock:

            already_booked: List[TimePeriod] = []
            date = period.start.date()
            date_end = period.end.date()

            # Iterate over all days in the period, including the last one
            while date <= date_end:
                day = self.days.get(date)
                if day is None:
                    date += datetime.timedelta(days=1)
                    continue
                
                already_booked += day.get_already_booked(period)
                date += datetime.timedelta(days=1)

            return already_booked
        

    def insert_booking(self, new_booking: Booking) -> None:
        with self.lock:

            start_date = new_booking.time_start.date()
            end_date = new_booking.time_end.date()

            # Iterate over all days in the period, including the last one
            while start_date <= end_date:
                day = self.days.get(start_date)
                if day is None:
                    day = Day(start_date)
                    self.days[start_date] = day
                
                day.insert_booking(new_booking)
                start_date += datetime.timedelta(days=1)
                

    def __str__(self) -> str:
        string = f"{self.id}:\n"
        # Add the days in sorted order
        for day in sorted(list(self.days.values()), key=lambda day: day.date):
            string += f"\tDay {day}\n"
        return string
    
    def __repr__(self) -> str:
        return self.__str__()


class BookingManager:

    __slots__ = ("slots")

    def __init__(self, slot_number: int) -> None:
        self.slots: Tuple[Slot] = tuple([Slot(i) for i in range(slot_number)])
    

    def clean_slots(self) -> None:
        for slot in self.slots:
            slot.clean_days()


    def get_already_booked(self, slot_index: int, period: TimePeriod) -> Tuple[TimePeriod]:
        return self.slots[slot_index].get_already_booked(period)


    def insert_booking(self, slot_index: int, new_booking: Booking) -> None:
        self.slots[slot_index].insert_booking(new_booking)


    def __str__(self) -> str:
        string = ""
        for slot in self.slots:
            string += f"Slot {slot}\n"
        return string
    
    def __repr__(self) -> str:
        return self.__str__()

