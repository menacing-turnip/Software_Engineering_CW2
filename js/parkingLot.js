class ParkingLot
{
    // Private instance attributes for abstraction
    #parkingSpaces;
    #maxParkingSpaces;
    #keyBuilding;

    constructor(parkingSpaces, maxParkingSpaces, keyBuilding)
    {
        this.#parkingSpaces = parkingSpaces;
        this.#maxParkingSpaces = maxParkingSpaces;
        this.#keyBuilding = keyBuilding;
    }

    // Accessor methods
    get parkingSpaces()
    {
        return this.#parkingSpaces;
    }

    set parkingSpaces(parkingSpaces)
    {
        this.#parkingSpaces = parkingSpaces;
    }

    get maxParkingSpaces()
    {
        return this.#maxParkingSpaces;
    }

    set maxParkingSpaces(maxParkingSpaces)
    {
        this.#maxParkingSpaces = maxParkingSpaces;
    }
    
    get keyBuilding()
    {
        return this.#keyBuilding;
    }

    set keyBuilding(keyBuilding)
    {
        this.#keyBuilding = keyBuilding;
    }
}
