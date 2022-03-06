

export async function getDailyBookings(slotID: string, date: Date) {

    const starPeriod = new Date(date.getFullYear(), date.getMonth(), date.getDate()).toISOString().slice(0,-5)+"Z";
    const endPeriod = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1).toISOString().slice(0,-5)+"Z";

    const response = await fetch(`http://localhost:5000/api/slots/${slotID}/already_booked?start_period=${starPeriod}&end_period=${endPeriod}`);
    
    const data = await response.json();
    return data.bookings;
}


export async function isValidSlot(slotID: string): Promise<boolean> {
    const response = await fetch(`http://localhost:5000/api/slots/${slotID}/is_valid`);
    const data = await response.json();
    return data.is_valid;
}

