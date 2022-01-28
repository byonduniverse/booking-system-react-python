import datetime
from typing import List, Tuple


class TimePeriod:

    __slots__ = ("start", "end")

    def __init__(self, start: datetime.datetime, end: datetime.datetime) -> None:
        self.start = start
        self.end = end
    
    def __str__(self) -> str:
        return f"{self.start} - {self.end}"
    
    def __repr__(self) -> str:
        return self.__str__()


class Booking:

    def __init__(self, name: str, phone_number: str, time_start: datetime.datetime, time_end: datetime.datetime) -> None:
        self.name = name
        self.phone_number = phone_number
        self.time_start = time_start
        self.time_end = time_end
    
    def __str__(self) -> str:
        return f"<{self.name} ({self.phone_number}) {self.time_start} - {self.time_end}>"

    def __repr__(self) -> str:
        return self.__str__()


class Slot:

    def __init__(self) -> None:
        self.bookings: List[Booking] = []
    

    def lock(self) -> None:
        pass
    

    def get_already_booked(self, period: TimePeriod) -> List[TimePeriod]:
        already_booked: List[TimePeriod] = []
        for i in range(len(self.bookings)):
            if self.bookings[i].time_end <= period.start:
                continue

            for booking in self.bookings[i:]:
                if booking.time_end < period.end:
                    already_booked.append(TimePeriod(booking.time_start, booking.time_end))
                else:
                    break

            break

        return already_booked


    def insert_booking(self, new_booking: Booking) -> None:
        if len(book)

                    

    def __str__(self) -> str:
        string = ""
        for slot in self.slots:
            string += f"{slot}\n"
        return string
    
    def __repr__(self) -> str:
        return self.__str__()


class BookingManager:

    def __init__(self, slot_number: int) -> None:
        self.slots: Tuple[Slot] = (Slot(),) * slot_number


