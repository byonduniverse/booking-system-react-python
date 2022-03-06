import datetime
import json


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
    
    def toJSON(self) -> str:
        return json.dumps({
            "start": self.start.isoformat(),
            "end": self.end.isoformat()
        })




