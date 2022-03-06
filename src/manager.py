import datetime
from typing import Dict, Tuple, NewType
from .time_period import TimePeriod
from .booking import Booking
from .database import Database


class Day:
    
    def __init__(self, date: datetime.date, slot_id: int) -> None:
        self.date = date
        self.slot_id = slot_id
        self.bookings = []
        self.is_updated = False

    
    def get_bookings(self) -> Tuple[Booking]:
        if self.is_updated:
            return tuple(self.bookings)
        
        self.bookings = Database.get_daily_bookings(self.slot_id, self.date)
        self.is_updated = True
        return tuple(self.bookings)


Month = NewType("Month", Dict[int, Day])
Year = NewType("Year", Dict[int, Month])


class Slot:

    __slots__ = ("id", "years")

    def __init__(self, id: int) -> None:
        self.id = id
        self.years: Dict[int, Year] = []

    
    def get_daily_bookings(self, date: datetime.date) -> Tuple[Booking]:
        year = self.years.get(date.year)
        if year is None:
            year = self.years[date.year] = {}
        
        month = year.get(date.month)
        if month is None:
            month = year[date.month] = {}

        day = month.get(date.day)
        if day is None:
            day = month[date.day] = Day(date, self.id)

        return tuple(day.get_bookings())
    

    def insert_booking(self, booking: Booking) -> None:
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

        day.bookings.append(booking)
        day.is_updated = False
        



class BookingManager:

    __slots__ = ("slots")

    def __init__(self, slot_id: int) -> None:
        self.slots: Tuple[Slot] = tuple([Slot(i) for i in range(slot_id)])
    

    def is_valid_slot(self, slot_id: int) -> bool:
        return 0 <= slot_id < len(self.slots)
    

    def clean_slots(self) -> None:
        for slot in self.slots:
            slot.clean_days()


    def get_already_booked(self, slot_id: int, period: TimePeriod) -> Tuple[TimePeriod]:
        try:
            return self.slots[slot_id].get_daily_bookings(period)
        except IndexError:
            return ()


    def insert_booking(self, slot_id: int, new_booking: Booking) -> bool:
        try:
            return self.slots[slot_id].insert_booking(new_booking)
        except IndexError:
            return False


    def __str__(self) -> str:
        string = ""
        for slot in self.slots:
            string += f"Slot {slot}\n"
        return string
    
    def __repr__(self) -> str:
        return self.__str__()

