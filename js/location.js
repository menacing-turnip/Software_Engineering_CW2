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

    set xcoord()
    {
        this.#xcoord = xcoord;
    }

    get ycoord()
    {
        return this.#ycoord;
    }

    set ycoord()
    {
        this.#ycoord = ycoord;
    }
}
