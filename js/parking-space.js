class ParkingSpace
{
    #id;
    #isOccupied;
    #isReserved;
    #reservation;
    #location;

    constructor(id, location)
    {  
        this.#id = id;
        this.#isOccupied = false;
        this.#isReserved = false;
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

}