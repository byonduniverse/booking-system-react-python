import datetime
import psycopg2
from psycopg2.sql import SQL
from typing import Tuple, NewType, List
from .booking import Booking
from .settings import DATABASE_URL


Date = NewType("Date", int)
StartTime = NewType("StartTime", int)
EndTime = NewType("EndTime", int)
Slot = NewType("Slot", int)
Name = NewType("Name", str)
PhoneNumber = NewType("PhoneNumber", str)
BookingRow = NewType("BookingRow", Tuple[Date, StartTime, EndTime, Slot, Name, PhoneNumber])


def serialize_date(date: datetime.date) -> Date:
    return date.year * 10000 + date.month * 100 + date.day


def serialize_booking_times(booking: Booking) -> Tuple[Date, StartTime, EndTime]:
    return (
        serialize_date(booking.time_start.date()),
        booking.time_start.hour * 100 + booking.time_start.minute,
        booking.time_end.hour * 100 + booking.time_end.minute
    )


def deserialize_booking_times(date: Date, start_time: StartTime, end_time: EndTime) -> Tuple[datetime.datetime, datetime.datetime]:
    return (
        datetime.datetime(date // 10000, date // 100 % 100, date % 100, start_time // 100, start_time % 100),
        datetime.datetime(date // 10000, date // 100 % 100, date % 100, end_time // 100, end_time % 100)
    )


def row_to_booking(row: BookingRow) -> Booking:
    time_start, time_end = deserialize_booking_times(row[0], row[1], row[2])
    return Booking(
        name=row[4],
        phone_number=str(row[5]),
        time_start=time_start,
        time_end=time_end
    )


def booking_to_row(booking: Booking, slot_id: int) -> BookingRow:
    return BookingRow(
        *serialize_booking_times(booking),
        slot_id,
        booking.name,
        int(booking.phone_number)
    )


class Database:

    INIT_DATABASE = SQL("""
        CREATE TABLE IF NOT EXISTS bookings (
            date INTEGER NOT NULL,
            start_time SMALLINT NOT NULL,
            end_time SMALLINT NOT NULL,
            slot SMALLINT NOT NULL,
            name VARCHAR(100) NOT NULL,
            phone_number BIGINT NOT NULL
        );

        CREATE INDEX IF NOT EXISTS bookings_index ON bookings (date) INCLUDE (slot);
    """)

    SELECT_DAILY_BOOKINGS = SQL("""
        SELECT * FROM bookings WHERE date = %s AND slot = %s;
    """)

    INSERT_BOOKING = SQL("""
        INSERT INTO bookings (date, start_time, end_time, slot, name, phone_number)
        VALUES (%s, %s, %s, %s, %s, %s);
    """)


    conn = None


    @classmethod
    def init_database(cls):
        cls.conn = psycopg2.connect(DATABASE_URL)
        
        with cls.conn.cursor() as cur:
            cur.execute(cls.INIT_DATABASE)
            cls.conn.commit()


    @classmethod
    def get_daily_bookings(cls, slot_id: int, date: datetime.date) -> List[Booking]:
        with cls.conn.cursor() as cur:
            cur.execute(cls.SELECT_DAILY_BOOKINGS, (serialize_date(date), slot_id))
            return [
                row_to_booking(row)
                for row in cur.fetchall()
            ]
    

    @classmethod
    def insert_booking(cls, slot_id: int, booking: Booking) -> bool:
        try:
            with cls.conn.cursor() as cur:
                cur.execute(cls.INSERT_BOOKING, booking_to_row(booking, slot_id))
                cls.conn.commit()
                return True
                
        except Exception as e:
            print(e)
            return False

        