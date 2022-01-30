import datetime
from src.manager import BookingManager, TimePeriod, Booking


manager = BookingManager(10)

booking = Booking("Nicholas Obert", "5555", TimePeriod(datetime.datetime(2020, 1, 1, 10, 0), datetime.datetime(2020, 1, 1, 11, 0)))


manager.insert_booking(2, booking)


manager.clean_slots()

print(manager)
