class Reservation
{
    #startDate;
    #endDate;

    constructor(srtDateStr, endDateStr)
    {
        this.#startDate = srtDateStr;
        this.#endDate = endDateStr;
    }

    // Accessor methods
    get startDate()
    {
        return this.#startDate;
    }

    set startDate(startDate)
    {
        this.#startDate = startDate;
    }

    get endDate()
    {
        return this.#endDate;
    }

    set endDate(endDate)
    {
        this.#endDate = endDate;
    }
}
