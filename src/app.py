import datetime
from flask import Flask, current_app, jsonify, request, render_template
from flask_restful import Api, Resource
from flask_cors import CORS

from src.manager import BookingManager, Booking, BookedYears
from src.database import Database


TIME_FORMAT = "%Y-%m-%dT%H:%M:%S%z"


app = Flask(__name__,
    static_folder="frontend/build/",
    template_folder="frontend/build/",
    static_url_path=""
)

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
api = Api(app)
app.booking_manager = BookingManager(10)


Database.init_database()


@app.route("/")
def index():
    return render_template("index.html")


class AlreadyBookedHours(Resource):

    def get(self, slot_index: int):
        start_period: str = request.args.get("start_period")
        end_period: str = request.args.get("end_period")

        if start_period is None or end_period is None:
            return {"error": "Missing start_period or end_period in request"}, 400

        # Validate the start_period and end_period and convert them to datetime.datetime objects
        try:    
            start_period = datetime.datetime.strptime(start_period, TIME_FORMAT)
            end_period = datetime.datetime.strptime(end_period, TIME_FORMAT)
        except ValueError:
            return {"error": "Invalid start_period or end_period in request"}, 400
        
        if start_period >= end_period:
            return {"error": "start_period must be before end_period"}, 400

        booked_years: BookedYears = current_app.booking_manager.get_already_booked(
            slot_index,
            start_period,
            end_period
        )

        return jsonify({"bookings": booked_years})


class Book(Resource):

    def get(self, slot_index: int):
        start_period: str = request.args.get("start_period")
        end_period: str = request.args.get("end_period")
        name: str = request.args.get("name")
        phone_number: str = request.args.get("phone_number")

        if None in (start_period, end_period, name, phone_number):
            return {"error": "Missing start_period, end_period, name or phone_number in request"}, 400        
        
        # Validate the data
        if len(name) > 100:
            return {"error": "Name is too long, only up to 100 characters allowed."}, 400
        if len(phone_number) > 16:
            return {"error": "Phone number is too long, only up to 16 characters allowed."}, 400

        try:
            start_period = datetime.datetime.strptime(start_period, TIME_FORMAT)
            end_period = datetime.datetime.strptime(end_period, TIME_FORMAT)
        except ValueError:
            return {"error": "Invalid time format"}, 400
        
        if start_period >= end_period:
            return {"error": "start_period must be before end_period"}, 400

        booking = Booking(
            name,
            phone_number,
            start_period,
            end_period,
        )

        success: bool = current_app.booking_manager.insert_booking(slot_index, booking)
        if success:
            return {"success": True}, 200
        return {"success": False}, 400


class IsValidSlot(Resource):

    def get(self, slot_index: int):
        is_valid: bool = current_app.booking_manager.is_valid_slot(slot_index)
        return {"is_valid": is_valid}, 200


api.add_resource(AlreadyBookedHours, "/api/slots/<int:slot_index>/already_booked")
api.add_resource(Book, "/api/slots/<int:slot_index>/book")
api.add_resource(IsValidSlot, "/api/slots/<int:slot_index>/is_valid")

