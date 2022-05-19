/*

 File        	: parkingSpace.js

 Primary Author : Manuel Dogbatse

 Description 	: The 'ParkingSpace' class creates parking space objects that have
                  a set location and a parking state: free, occupied, reserved and
                  blocked.
*/

class ParkingSpace
{
    #id;
    // Parking space states
    #isOccupied;
    #isReserved;
    #isBlocked;
    #reservation;
    #location;

    constructor(id, location)
    {  
        this.#id = id;
        this.#isOccupied = false;
        this.#isReserved = false;
        this.#isBlocked = false;
        this.#reservation = null;
        this.#location = location;
    }

    // Accessor methods
    get id()
    {
        return this.#id;
    }

    set id(id)
    {
        this.#id = id;
    }

    get isOccupied()
    {
        return this.#isOccupied;
    }

    set isOccupied(isOccupied)
    {
        this.#isOccupied = isOccupied;
    }

    get isReserved()
    {
        return this.#isReserved;
    }

    set isReserved(isReserved)
    {
        this.#isReserved = isReserved;
    }

    get isBlocked()
    {
        return this.#isBlocked;
    }

    set isBlocked(isBlocked)
    {
        this.#isBlocked = isBlocked;
    }

    get reservation()
    {
        return this.#reservation;
    }

    set reservation(reservation)
    {
        this.#reservation = reservation;
    }

    get location()
    {
        return this.#location;
    }

    set location(location)
    {
        this.#location = location;
    }

    toString()
    {
        return "ID: "+this.#id+"\nLocation:\n"+this.#location.toString()+"\nIs Occupied?:\n"+this.#isOccupied+
        "\nIs Reserved:\n"+this.#isReserved+"\nIs Blocked:\n"+this.#isBlocked;
    }

}
