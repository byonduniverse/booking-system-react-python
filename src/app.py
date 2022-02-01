import datetime
from typing import Tuple
from flask import Flask, current_app, request, render_template
from flask_restful import Api, Resource

from src.manager import BookingManager, TimePeriod, Booking


app = Flask(__name__,
    static_folder="frontend/build/static",
    template_folder="frontend/build"
)

api = Api(app)
app.booking_manager = BookingManager(10)


@app.route("/")
def index():
    return render_template("index.html")


class AlreadyBookedHours(Resource):

    def get(self, slot_index: int):
        start_period: str = request.args.get("start_period")
        end_period: str = request.args.get("end_period")

        if start_period is None or end_period is None:
            return {"error": "Missing start_period or end_period in request"}, 400

        period = TimePeriod(
            start=datetime.datetime.strptime(start_period, "%Y-%m-%dT%H:%M:%S"),
            end=datetime.datetime.strptime(end_period, "%Y-%m-%dT%H:%M:%S")
        )
        bookings: Tuple[TimePeriod] = current_app.booking_manager.get_already_booked(slot_index, period)
        return {"bookings": [booking.toJSON() for booking in bookings]}, 200


class Book(Resource):

    def get(self, slot_index: int):
        start_period: str = request.args.get("start_period")
        end_period: str = request.args.get("end_period")
        name: str = request.args.get("name")
        phone_number: str = request.args.get("phone_number")

        if None in (start_period, end_period, name, phone_number):
            return {"error": "Missing start_period, end_period, name or phone_number in request"}, 400

        period = TimePeriod(
            start=datetime.datetime.strptime(start_period, "%Y-%m-%dT%H:%M:%S"),
            end=datetime.datetime.strptime(end_period, "%Y-%m-%dT%H:%M:%S")
        )

        booking = Booking(name, phone_number, period)

        success: bool = current_app.booking_manager.insert_booking(slot_index, booking)
        if success:
            return {"success": True}, 200
        return {"success": False}, 400


api.add_resource(AlreadyBookedHours, "/slots/<int:slot_index>/already_booked")
api.add_resource(Book, "/slots/<int:slot_index>/book")

