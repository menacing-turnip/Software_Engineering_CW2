class Reservation
{
    #dateReserved;
    #timeReserved;

    constructor(dateReserved, timeReserved)
    {
        this.#dateReserved = dateReserved;
        this.#timeReserved = timeReserved;
    }

    // Accessor methods
    get dateReserved()
    {
        return this.#dateReserved;
    }

    set dateReserved(dateReserved)
    {
        this.#dateReserved = dateReserved;
    }

    get timeReserved()
    {
        return this.#timeReserved;
    }

    set timeReserved(timeReserved)
    {
        this.#timeReserved = timeReserved;
    }
}
