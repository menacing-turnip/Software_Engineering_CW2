class ParkingMap
{
    #parkingLot;
    #parkingSpaces;

    constructor(parkingLot, parkingSpaces)
    {
        this.#parkingLot = parkingLot;
        this.#parkingSpaces = parkingSpaces;
    }

    // Accessor methods
    get parkingLot()
    {
        return this.#parkingLot;
    }

    set parkingLot(parkingLot)
    {
        this.#parkingLot = parkingLot;
    }

    get parkingSpaces()
    {
        return this.#parkingSpaces;
    }

    set parkingSpaces(parkingSpaces)
    {
        this.#parkingSpaces = parkingSpaces;
    }
}