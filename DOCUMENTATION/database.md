# Database

- [Database](#database)
  - [Strucutre](#strucutre)

The application uses a PostgreSQL database to store the bookings.

## Strucutre

The database contains one big table called `bookings`.
One booking has the following columns:

* date: INTEGER, NOT NULL
  Colunm used to store the date of the booking.
  The date is serialized as a number composed of the year, month and day.
  For example, the date `2020-01-01` is serialized as `20200101`.

* start_time: SMALLINT, NOT NULL
  Column used to store the start time of the booking.
  The time is serialized as a number composed of the hour and minute.
  For example, the time `12:00` is serialized as `1200`

* end_time: SMALLINT, NOT NULL
  Column used to store the end time of the booking.
  The time is serialized as a number composed of the hour and minute.
  For example, the time `13:00` is serialized as `1300`

* slot: SMALLINT, NOT NULL
  Column used to store the slot of the booking.

* name: VARCHAR(100), NOT NULL
  Column used to store the name of the booker.

* phone_number: BIGINT, NOT NULL
  Column used to store the phone number of the booker.
  
