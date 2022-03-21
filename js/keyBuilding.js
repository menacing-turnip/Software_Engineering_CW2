class keyBuilding
{
    #name;
    #location;

    constructor(name, location)
    {
        this.#name = name;
        this.#location = location;
    }

    // Accessor methods
    get name()
    {
        return this.#name;
    }

    set name(name)
    {
        this.#name = name;
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
