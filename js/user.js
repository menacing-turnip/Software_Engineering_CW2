class User
{
    #name;
    #accountNumber;
    #username;
    #password;
    #moneyAccount;

    constructor(name, accountNumber, username, password, moneyAccount)
    {
        this.#name = name;
        this.#accountNumber = accountNumber;
        this.#username = username;
        this.#password = password;
        this.#moneyAccount = moneyAccount;
    }

    get name()
    {
        return this.#name;
    }

    set name(name)
    {
        this.#name = name;
    }

    get accountNumber()
    {
        return this.#accountNumber;
    }

    set accountNumber(accountNumber)
    {
        this.#accountNumber = accountNumber;
    }

    get username()
    {
        return this.#username;
    }

    set username(username)
    {
        this.#username = username;
    }

    get password()
    {
        return this.#password;
    }

    set password(password)
    {
        this.#password = password;
    }

    get moneyAccount()
    {
        return this.#moneyAccount;
    }

    set moneyAccount(moneyAccount)
    {
        this.#moneyAccount = moneyAccount;
    }

    /*sendMessage()
    {}*/
}