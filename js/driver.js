class Driver extends User
{
    #ticket;
    #reservation;
    #location;

    constructor(name, accountNumber, username, password, moneyAccount)
    {
        super(name, accountNumber, username, password, moneyAccount);
        this.#ticket = null;
        this.#reservation = null;
        this.#location = null;
    }

    get ticket()
    {
        return this.#ticket;
    }

    set ticket(ticket)
    {
        this.#ticket = ticket;
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