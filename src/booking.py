import datetime


class Booking:

    __slots__ = ("name", "phone_number", "time_start", "time_end")

    def __init__(self, name: str, phone_number: str, time_start: datetime.datetime, time_end = datetime.datetime) -> None:
        self.name = name
        self.phone_number = phone_number
        self.time_start = time_start
        self.time_end = time_end
    
    def __str__(self) -> str:
        return f"<{self.name} ({self.phone_number}) {self.time_start} - {self.time_end}>"

    def __repr__(self) -> str:
        return self.__str__()

