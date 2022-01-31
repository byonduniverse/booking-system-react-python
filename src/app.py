import datetime
from flask import Flask, current_app, request
from flask_restful import Api, Resource

from src.manager import BookingManager, TimePeriod


app = Flask(__name__)
api = Api(app)
app.booking_manager = BookingManager()


class AlreadyBookedHours(Resource):

    def get(self, slot_index: int, start_period: str, end_period: str):
        period = TimePeriod(
            start=datetime.datetime.strptime(start_period, "%Y-%m-%dT%H:%M:%S"),
            end=datetime.datetime.strptime(end_period, "%Y-%m-%dT%H:%M:%S")
        )
        bookings = current_app.booking_manager.get_bookings(slot_index, period)


api.add_resource(AlreadyBookedHours, "/slots/<int:slot_index>/<string:start_period>/<string:end_period>")

