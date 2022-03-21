class Reservation
{
    #startDate;
    #endDate;

    constructor(startYear, startMonth, startDay, startHour, startMinute, startSecond, endYear, endMonth, endDay, endHour, endMinute, endSecond)
    {
        this.#startDate = new Date(startYear, startMonth, startDay, startHour, startMinute, startSecond);
        this.#endDate = new Date(endYear, endMonth, endDay, endHour, endMinute, endSecond);
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
