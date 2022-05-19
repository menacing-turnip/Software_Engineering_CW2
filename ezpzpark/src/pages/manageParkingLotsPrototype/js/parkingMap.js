/*

 File        	: parkingMap.js

 Primary Author : Manuel Dogbatse

 Description 	: The 'ParkingMap' class stores the parking lots for display,
                  adds and removes these parking lots to an array, and creates
                  the display for the HTML page.
*/

class ParkingMap
{
    // Array for parking lots
    #parkingLots;

    constructor()
    {
        this.#parkingLots = [];
    }

    // Accessor methods
    get parkingLots()
    {
        return this.#parkingLots;
    }

    addParkingLot(parkingLot)
    {
        // Each parking lot is given an ID to make removing them and displaying them possible
        parkingLot.id = this.#parkingLots.length;
        this.#parkingLots.push(parkingLot);
    }

    removeParkingLot(id)
    {
        this.#parkingLots.splice(id, 1);
        // Prevents multiple parking lots from having the same ID after splicing one lot out
        for (let i = 0; i < this.#parkingLots.length; i++)
        {
            this.#parkingLots[i].id = i;
        }
    }

    updateParkingLotMap(n)
    {
        const parkingLotDiv = document.createElement("div"),
              parkingSpaceNo = this.#parkingLots[n].parkingSpaceNo;
                
        // 'Math.trunc()' gives the required number of columns of length 5 to display the parking spaces
        let maxColumns = Math.trunc(parkingSpaceNo / 5);

        // On click event to make 'block/unblock parking space?' popup to appear when a parking space is clicked
        const onParkingSpaceClick = function(event)
        {
            if (parkingLotDisplay.lastElementChild.id != "parking-block-space")
            {
                const eventTarget = event.currentTarget, parkingBlockDiv = document.createElement("div"),
                parkingBlockDivExit = document.createElement("div"), parkingBlockDivText = document.createElement("div");

                parkingBlockDiv.id = "parking-block-space";
                parkingBlockDivExit.innerHTML = "CLOSE";
                parkingBlockDivText.addEventListener("click", function()
                {
                    let c = count;
                    parkingLotDisplay.removeChild(parkingLotDisplay.lastElementChild);
                    if (parkingLotMap.parkingLots[c].parkingSpaces[eventTarget.getAttribute("space-id")].isBlocked)
                    {
                        parkingLotMap.parkingLots[c].parkingSpaces[eventTarget.getAttribute("space-id")].isBlocked = false;
                    }
                    else
                    {
                        // Making the reserved and occupied states false to prevent the space from not changing after being blocked
                        parkingLotMap.parkingLots[c].parkingSpaces[eventTarget.getAttribute("space-id")].isBlocked = true;
                        parkingLotMap.parkingLots[c].parkingSpaces[eventTarget.getAttribute("space-id")].isReserved = false;
                        parkingLotMap.parkingLots[c].parkingSpaces[eventTarget.getAttribute("space-id")].isOccupied = false;
                    }
                    container.removeChild(container.children[c]);
                    container.insertBefore(parkingLotMap.updateParkingLotMap(parkingLotMap.parkingLots[c].id), container.children[c]);
                });

                // Event listener for closing the popup on click
                parkingBlockDivExit.addEventListener("click", function(){
                    parkingLotDisplay.removeChild(parkingLotDisplay.lastElementChild);
                });

                // Changes message based on blocked status
                if (eventTarget.getAttribute("blocked") === "true")
                {
                    parkingBlockDivText.innerHTML = "UNBLOCK SPACE "+eventTarget.getAttribute("space-id")+"?";
                }
                else
                {
                    parkingBlockDivText.innerHTML = "BLOCK SPACE "+eventTarget.getAttribute("space-id")+"?";
                }
                parkingBlockDiv.append(parkingBlockDivExit);
                parkingBlockDiv.append(parkingBlockDivText);
                parkingLotDisplay.append(parkingBlockDiv);
            }
            
        };

        if (parkingSpaceNo % 5 != 0)
        {
            maxColumns++;
        }

        for (let i = 0; i < maxColumns; i++)
        {
            // Parking spaces are added to columns to make the roads connect to each parking space
            const parkingLotColumnDiv = document.createElement("div");

            // Making a parking space div and appending each one to the right column in the display
            for (let j = 0; j < 5; j++)
            {
                if (parkingSpaceNo - ((i * 5) + j + 1) >= 0)
                {
                    const parkingSpaceDiv = document.createElement("div"),
                    parkingSpaceIDAtt = document.createAttribute("space-id"),
                    occupiedAtt = document.createAttribute("occupied"),
                    reservedAtt = document.createAttribute("reserved"),
                    blockedAtt = document.createAttribute("blocked");

                    let innerHTMLStr;
                    parkingSpaceIDAtt.value = this.#parkingLots[n].parkingSpaces[(i * 5) + j].id.toString();
                    occupiedAtt.value = this.#parkingLots[n].parkingSpaces[(i * 5) + j].isOccupied;
                    reservedAtt.value = this.#parkingLots[n].parkingSpaces[(i * 5) + j].isReserved;
                    blockedAtt.value = this.#parkingLots[n].parkingSpaces[(i * 5) + j].isBlocked;
                    parkingSpaceDiv.className = "parking-space-div";

                    innerHTMLStr = this.#parkingLots[n].parkingSpaces[(i * 5) + j].id.toString();

                    if (this.#parkingLots[n].parkingSpaces[(i * 5) + j].isReserved)
                    {
                        parkingSpaceDiv.innerHTML = innerHTMLStr.concat("\nRESERVED");
                    }
                    else if(this.#parkingLots[n].parkingSpaces[(i * 5) + j].isOccupied)
                    {
                        parkingSpaceDiv.innerHTML = innerHTMLStr.concat("\nOCCUPIED");
                    }
                    else if(this.#parkingLots[n].parkingSpaces[(i * 5) + j].isBlocked)
                    {
                        parkingSpaceDiv.innerHTML = innerHTMLStr.concat("\nBLOCKED");
                    }
                    else
                    {
                        parkingSpaceDiv.innerHTML = innerHTMLStr.concat("\nFREE");
                    }
                    
                    parkingSpaceDiv.setAttributeNode(parkingSpaceIDAtt);
                    parkingSpaceDiv.setAttributeNode(occupiedAtt);
                    parkingSpaceDiv.setAttributeNode(reservedAtt);
                    parkingSpaceDiv.setAttributeNode(blockedAtt);
                    parkingLotColumnDiv.className = "parking-space-column-div";
                    parkingSpaceDiv.addEventListener("click", onParkingSpaceClick);
                    parkingLotColumnDiv.append(parkingSpaceDiv);
                }
            }
            parkingLotDiv.append(parkingLotColumnDiv);
        }
        parkingLotDiv.className = "parking-lot-div";
        return parkingLotDiv;
    }

    // Every time a parking lot is added, the parking lot index button is created to make selecting parking lots easier
    addParkingLotButton(n)
    {
        const parkingLotIdButton = document.createElement("button");

        parkingLotIdButton.type = "button";
        parkingLotIdButton.innerHTML = n + 1;
        return parkingLotIdButton;
    }
}
