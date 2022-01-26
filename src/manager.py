import datetime
from typing import List, Tuple


class Booker:

    def __init__(self, name: str, phone_number: str, time_start: datetime.datetime, time_end: datetime.datetime) -> None:
        self.name = name
        self.phone_number = phone_number
        self.time_start = time_start
        self.time_end = time_end


class Slot:

    def __init__(self) -> None:
        self.bookings: List[Booker] = []
    
    
    def is_slot_free(self, index: int, time_start: datetime.datetime, time_end: datetime.datetime) -> bool:
        for booking in self.bookings:
            if booking.time_start < time_end and booking.time_end > time_start:
                return False
        return True



class BookingManager:

    def __init__(self, slot_number: int) -> None:
        self.slots: Tuple[Slot] = (Slot(),) * slot_number


