/*

 File        	: parkingLot.js

 Primary Author : Manuel Dogbatse

 Description 	: The 'ParkingLot' class creates parking lot objects that are used to store
                  parking spaces, and adds and removes them from the list of parking spaces.
*/

class ParkingLot
{
    // Private instance attributes for abstraction
    #parkingSpaces;
    #parkingSpaceNo;
    #parkingSpaceXCoord;
    #parkingSpaceYCoord;
    #parkingSpaceRow;
    #parkingSpaceColumn;
    #maxParkingSpaces;
    #keyBuilding;
    #id;

    constructor()
    {
        this.#parkingSpaces = [];
        this.#maxParkingSpaces = 30;
        this.#parkingSpaceXCoord = 0;
        this.#parkingSpaceYCoord = 0;
        this.#parkingSpaceRow = 0;
        this.#parkingSpaceColumn = 0;
        this.#parkingSpaceNo = 0;
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

    get parkingSpaceNo()
    {
        return this.#parkingSpaceNo;
    }
    
    get keyBuilding()
    {
        return this.#keyBuilding;
    }

    set keyBuilding(keyBuilding)
    {
        this.#keyBuilding = keyBuilding;
    }

    get id()
    {
        return this.#id;
    }

    set id(id)
    {
        this.#id = id;
    }

    // Generates the parking space location for the GPS to show the nearest parking space to the driver
    generateParkingSpaceLocation()
    {
        this.#parkingSpaceXCoord = 0;
        this.#parkingSpaceYCoord = 0;
        this.#parkingSpaceRow = 0;
        this.#parkingSpaceColumn = 0;
        
        for (let i = 0; i <= this.#parkingSpaceNo; i++)
        {
            if (i != 0)
            {
                if (i % 5 == 0)
                {
                    this.#parkingSpaceRow = 0;
                    this.#parkingSpaceYCoord = 0;
                    this.#parkingSpaceColumn++;
                }
                else
                {
                    this.#parkingSpaceRow++;
                }
            }

            this.#parkingSpaceYCoord = 60 * this.#parkingSpaceRow;
            
            if (this.#parkingSpaceRow == 0)
            {
                if (this.#parkingSpaceColumn % 2 == 0 && this.#parkingSpaceColumn != 0)
                {
                    this.#parkingSpaceXCoord += 100;
                }
                else if((this.#parkingSpaceColumn + 1) % 2 == 0)
                {
                    this.#parkingSpaceXCoord += 140;
                }
            }
        }
        const location = new Location(this.#parkingSpaceXCoord, this.#parkingSpaceYCoord);
        return location;
    }

    // Adding a parking space to the parking lot to the stack
    addParkingSpace()
    {
        const location = this.generateParkingSpaceLocation();
        // This prevents the number of parking spaces from exceeding the maximum parking space number
        if (this.#parkingSpaceNo < this.#maxParkingSpaces)
        {
            const parkSpaceId = this.#parkingSpaceNo;
            this.#parkingSpaceNo++;
            const newParkSpace = new ParkingSpace(parkSpaceId, location);
            this.#parkingSpaces.push(newParkSpace);
        }
        else
        {
            console.log("ERROR. YOU HAVE REACHED THE MAXIMUM NUMBER OF PARKING SPACES.");
        }
    }

    // Removing the last parking space to the parking lot
    removeParkingSpace()
    {
        // This prevents the number of parking spaces from going into the negative numbers
        if (this.#parkingSpaceNo > 0)
        {
            this.#parkingSpaceNo--;
            this.#parkingSpaces.pop();
        }
        else
        {
            console.log("ERROR. YOU HAVE NO PARKING SPACES TO REMOVE.");
        }
        
    }
}
