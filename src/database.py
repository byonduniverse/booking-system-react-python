import datetime
import psycopg2
from psycopg2.sql import SQL
from typing import Tuple
from os import getenv
from .booking import Booking
from .time_period import TimePeriod


DATABASE_URL = getenv("DATABASE_URL")
if DATABASE_URL is None:
    raise Exception("DATABASE_URL not set")


class Database:

    INIT_DATABASE = SQL("""
        CREATE TABLE IF NOT EXISTS bookings (
            date SMALLINT NOT NULL,
            startTime char(5) NOT NULL,
            endTime char(5) NOT NULL,
            slot SMALLINT NOT NULL,
            name VARCHAR(100) NOT NULL,
            phone_number VARCHAR(16) NOT NULL
        );

        CREATE INDEX IF NOT EXISTS bookings_index ON bookings (date) INCLUDE (slot);
    """)

    SELECT_DAILY_BOOKINGS = SQL("""
        SELECT * FROM bookings WHERE date = %s AND slot = %s;
    """)


    conn = None


    @staticmethod
    def serialize_date(date: datetime.date) -> int:
        return date.year * 10000 + date.month * 100 + date.day
    
    @staticmethod
    def deserialize_date(date: int) -> datetime.date:
        return datetime.date(date // 10000, date // 100 % 100, date % 100)


    @classmethod
    def init_database(cls):
        cls.conn = psycopg2.connect(DATABASE_URL)
        
        with cls.conn.cursor() as cur:
            cur.execute(cls.INIT_DATABASE)
            cls.conn.commit()


    @classmethod
    def get_daily_bookings(cls, slot_id: int, date: datetime.date) -> Tuple[Booking]:
        with cls.conn.cursor() as cur:
            cur.execute(cls.SELECT_DAILY_BOOKINGS, (cls.serialize_date(date), slot_id))
            return tuple(
                Booking(
                    name=row[4],
                    phone_number=row[5],
                    period=TimePeriod(
                        start=datetime.datetime.strptime(row[1], "%H:%M"),
                        end=datetime.datetime.strptime(row[2], "%H:%M")
                    )
                )
                for row in cur.fetchall()
            )
        
