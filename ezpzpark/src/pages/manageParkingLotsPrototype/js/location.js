/*

 File        	: location.js

 Primary Author : Manuel Dogbatse

 Description 	: The 'location' class stores the x and y coordinates of either
                  a parking space, a key building or a driver.
*/

class Location
{
    #xcoord;
    #ycoord;

    constructor(xcoord, ycoord)
    {
        this.#xcoord = xcoord;
        this.#ycoord = ycoord;
    }

    // Accessor methods
    get xcoord()
    {
        return this.#xcoord;
    }

    set xcoord(xcoord)
    {
        this.#xcoord = xcoord;
    }

    get ycoord()
    {
        return this.#ycoord;
    }

    set ycoord(ycoord)
    {
        this.#ycoord = ycoord;
    }

    toString()
    {
        return "X: "+this.#xcoord+"\nY: "+this.#ycoord;
    }

}
