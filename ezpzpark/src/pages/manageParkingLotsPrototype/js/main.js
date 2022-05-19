/*

 File        	: main.js

 Primary Author : Manuel Dogbatse

 Description 	: This file creates the parking lot map and displays all the different
                  parking lots and their spaces. It allows the user to click on the 
                  many buttons and make changes to the parking lots.
*/

// Creating required objects
const parkingLotMap = new ParkingMap,
      parkingLot1 = new ParkingLot(), parkingLot2 = new ParkingLot(),
      parkingLot3 = new ParkingLot(), parkingLotDisplay = document.querySelector("#parking-lot-display"),
      container = document.querySelector("#parking-lot-container"),
      toolbarDivs = document.querySelectorAll(".toolbar-button-wrap");
      toolbarSelect = toolbarDivs[3],
      parkingLotDivs = document.querySelectorAll(".parking-lot-div");

const width = 1500;

// Buttons
const addSpaceButton = document.querySelector("#add-space-button"),
      removeSpaceButton = document.querySelector("#remove-space-button"),
      addLotButton = document.querySelector("#add-lot-button"),
      removeLotButton = document.querySelector("#remove-lot-button"),
      previousLotButton = document.querySelector("#previous-lot-button"),
      nextLotButton = document.querySelector("#next-lot-button");

// Counter
let count = 0, prevCount = 0;
      
// Makes the parking lot index button for the currently viewed parking lot highlighted
let highlightButton = function()
{
    toolbarSelect.children[prevCount].style.color = "gray";
    toolbarSelect.children[prevCount].style.borderColor = "gray";
    
    toolbarSelect.children[count].style.color = "black";
    toolbarSelect.children[count].style.borderColor = "black";
    return count;
};

// Event for selecting which parking lot to display
const addSelectLotEvent = function()
{
    for (let i = 0; i < toolbarSelect.children.length; i++)
    {
        toolbarSelect.children[i].addEventListener("click", addSelectLotFunction = function(){
            count = i;
            // Add event for cycling between parking lots after pressing the parking lot index buttons
            container.style.transform = "translateX("+(-width * count)+"px";

            prevCount = highlightButton();
        });
    }
};

// Every time a parking lot is made, the display is updated to show the display of the new parking lot, as well
// as its new parking lot index button
const appendParkingLot = function(parkingLot)
{
    parkingLotMap.addParkingLot(parkingLot);
    let i = parkingLotMap.parkingLots.length - 1;
    container.append(parkingLotMap.updateParkingLotMap(parkingLotMap.parkingLots[i].id));
    toolbarSelect.append(parkingLotMap.addParkingLotButton(parkingLotMap.parkingLots[i].id));
    addSelectLotEvent();
};

// Example parking lots
for (let i = 0; i < 3; i++)
{
    parkingLot1.addParkingSpace();
    console.log(parkingLot1.parkingSpaces[i].toString());
}

for (let i = 0; i < 7; i++)
{
    parkingLot2.addParkingSpace();
    console.log(parkingLot2.parkingSpaces[i].toString());
}

for (let i = 0; i < 20; i++)
{
    parkingLot3.addParkingSpace();

    // Creating different states for the parking spaces to test the different displays
    if (i % 2 == 0)
    {
        if (i % 3 == 0)
        {
            parkingLot3.parkingSpaces[i].isOccupied = true;
        }
        else
        {
            parkingLot3.parkingSpaces[i].isReserved = true;
        }
    }
    console.log(parkingLot3.parkingSpaces[i].toString());
}

// Adding parking lot objects to the 'ParkingMap' object
appendParkingLot(parkingLot1);
appendParkingLot(parkingLot2);
appendParkingLot(parkingLot3);

container.style.transform = "translateX("+(-width * count)+"px";
prevCount = highlightButton();

// Button Listeners
addSpaceButton.addEventListener("click", function()
{
    parkingLotMap.parkingLots[count].addParkingSpace();
    // The container div removes the child and remakes the parking lot display so that the update made in the display can be seen
    container.removeChild(container.children[count]);
    container.insertBefore(parkingLotMap.updateParkingLotMap(parkingLotMap.parkingLots[count].id), container.children[count]);
});

removeSpaceButton.addEventListener("click", function()
{
    parkingLotMap.parkingLots[count].removeParkingSpace();
    container.removeChild(container.children[count]);
    container.insertBefore(parkingLotMap.updateParkingLotMap(parkingLotMap.parkingLots[count].id), container.children[count]);
});

addLotButton.addEventListener("click", function()
{
    const newParkingLot = new ParkingLot();

    // A maximum of 10 parking lots is placed for this program
    if (parkingLotMap.parkingLots.length - 1 < 9)
    {
        appendParkingLot(newParkingLot);
        highlightButton();
    }
    else
    {
        console.log("YOU HAVE REACHED THE MAXIMUM NUMBER OF PARKING LOTS.");
    }
    
});

removeLotButton.addEventListener("click",function()
{
    // Checks to see if there are any parking lots in the 'ParkingMap' object
    if (parkingLotMap.parkingLots.length)
    {
        parkingLotMap.removeParkingLot(count);
        container.removeChild(container.children[count]);
        
        // Removes all the parking lot index buttons and remakes them to update the targets for the on
        // click events
        while (toolbarSelect.children[0])
        {
            toolbarSelect.removeChild(toolbarSelect.lastChild);
        }
        if (parkingLotMap.parkingLots.length)
        {
            for (let i = 0; i < parkingLotMap.parkingLots.length; i++)
            {
                toolbarSelect.append(parkingLotMap.addParkingLotButton(parkingLotMap.parkingLots[i].id));
            }
            addSelectLotEvent();
            highlightButton();
        }
    }
    else
    {
        console.log("THERE ARE NO MORE PARKING LOTS TO REMOVE.");
    }
});

// Cycles between the next and previous parking lots
nextLotButton.addEventListener("click", function()
{
    if (count < container.children.length - 1)
    {
        count++;
        container.style.transform = "translateX("+(-width * count)+"px";
    }
    else
    {
        count = 0;
        container.style.transform = "translateX("+(-width * count)+"px";
    }
    prevCount = highlightButton();
});

previousLotButton.addEventListener("click", function()
{
    if (count > 0)
    {
        count--;
        container.style.transform = "translateX("+(-width * count)+"px";
    }
    else
    {
        count = container.children.length - 1;
        container.style.transform = "translateX("+(-width * count)+"px";
    }
    prevCount = highlightButton();
});

addSelectLotEvent();
