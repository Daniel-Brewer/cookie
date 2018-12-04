// C is for Cookie 

const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
for (let x = 0; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

// Conjuction function

const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`
    console.log(conjoinedWord)
}

conjunction("Master", "Card")

// Mod Squad

{
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

    let HTMLRepresentation = `<h1>The Mod Squad</h1>`; 
    ModSquad.members.forEach(member => {
        HTMLRepresentation += `<li>${member}</li>`;  
        document.querySelector(".show-info").innerHTML = HTMLRepresentation;
    })
}

// Simon Says

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
let counter = 0;
for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]

    // some of this code seemd redundant so I commented it out
    if (currentLocation[1] > 2) {
        // let invalidLocation = true;
        console.log("This location is invalid")
        counter += 1;
        // if (invalidLocation) {
        // }
    }
}
console.log(`There were ${counter} invalid locations`)
