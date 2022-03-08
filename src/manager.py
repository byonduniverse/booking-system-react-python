import datetime
from typing import Dict, List, Tuple, NewType
from .booking import Booking
from .database import Database


TimePeriod = NewType("TimePeriod", Tuple[datetime.datetime, datetime.datetime])
BookedDays = NewType("BookedDays", Dict[int, Tuple[TimePeriod]])
BookedMonths = NewType("BookedMonths", Dict[int, BookedDays])
BookedYears = NewType("BookedYears", Dict[int, BookedMonths])


class Day:

    __slots__ = ("date", "slot_id", "bookings", "is_updated")
    
    def __init__(self, date: datetime.date, slot_id: int) -> None:
        self.date = date
        self.slot_id = slot_id
        self.bookings: List[Booking] = []
        self.is_updated = False

    
    def get_bookings(self) -> Tuple[Booking]:
        if self.is_updated:
            return tuple(self.bookings)
        
        self.bookings = Database.get_daily_bookings(self.slot_id, self.date)
        self.is_updated = True
        return tuple(self.bookings)
    

    def get_booked_hours(self) -> Tuple[TimePeriod]:
        return tuple(
            (booking.time_start, booking.time_end)
            for booking in self.get_bookings()
        )
    

    def insert_booking(self, booking: Booking) -> bool:
        
        success = Database.insert_booking(self.slot_id, booking)
        # Append the bookings to the list only if the insert was successful
        if success:
            self.bookings.append(booking)

        return success


Month = NewType("Month", Dict[int, Day])
Year = NewType("Year", Dict[int, Month])


class Slot:

    __slots__ = ("id", "years")

    def __init__(self, id: int) -> None:
        self.id = id
        self.years: Dict[int, Year] = {}

    
    def get_daily_bookings(self, date: datetime.date) -> Tuple[TimePeriod]:
        year = self.years.get(date.year)
        if year is None:
            year = self.years[date.year] = {}
        
        month = year.get(date.month)
        if month is None:
            month = year[date.month] = {}

        day = month.get(date.day)
        if day is None:
            day = month[date.day] = Day(date, self.id)

        return day.get_booked_hours()
    

    def insert_booking(self, booking: Booking) -> bool:
        # TODO handle bookings that span across multiple days/months/years ??? or don't allow that ???
        year = self.years.get(booking.time_start.year)
        if year is None:
            year = self.years[booking.time_start.year] = {}
        
        month = year.get(booking.time_start.month)
        if month is None:
            month = year[booking.time_start.month] = {}

        day = month.get(booking.time_start.day)
        if day is None:
            day = month[booking.time_start.day] = Day(booking.time_start.date(), self.id)

        day.insert_booking(booking)

        return True
        

class BookingManager:

    __slots__ = ("slots")

    def __init__(self, slot_id: int) -> None:
        self.slots: Tuple[Slot] = tuple([Slot(i) for i in range(slot_id)])
    

    def is_valid_slot(self, slot_id: int) -> bool:
        return 0 <= slot_id < len(self.slots)


    def get_already_booked(self, slot_id: int, time_start: datetime.datetime, end_time: datetime.datetime) -> BookedYears:
        
        if not self.is_valid_slot(slot_id):
            return ()

        booked_years: BookedYears = {}

        # Check for bookings on each day
        date = time_start.date()        
        while date <= end_time.date():
            
            daily_bookings = self.slots[slot_id].get_daily_bookings(date)
            # Discard empty days
            if len(daily_bookings) == 0:
                date += datetime.timedelta(days=1)
                continue

            # Create a new year if it doesn't exist
            booked_months: BookedMonths = booked_years.get(date.year)
            if booked_months is None:
                booked_months = booked_years[date.year] = {}
            
            # Create a new month if it doesn't exist
            booked_days: BookedDays = booked_months.get(date.month)
            if booked_days is None:
                booked_days = booked_months[date.month] = {}
            
            # Finally add the daily bookings to the structure
            booked_days[date.day] = daily_bookings

            date += datetime.timedelta(days=1)

        return booked_years
        
        
    def insert_booking(self, slot_id: int, new_booking: Booking) -> bool:

        if not self.is_valid_slot(slot_id):
            return False

        return self.slots[slot_id].insert_booking(new_booking)


    def __str__(self) -> str:
        string = ""
        for slot in self.slots:
            string += f"Slot {slot}\n"
        return string
    
    def __repr__(self) -> str:
        return self.__str__()

