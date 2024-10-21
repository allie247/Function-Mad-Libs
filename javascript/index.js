
//Type of Bird
const typeOfBirdInput = document.getElementById('typeOfBird');
const typeOfBird = typeOfBirdInput.value;

//Roommate Name
const roommateNameInput = document.getElementById('roommateName');
const roommateName = roommateNameInput.value;

//Noun
const nounInput = document.getElementById('noun');
const noun = nounInput.value;

//Liquid
const liquidInput = document.getElementById('liquid');
const liquid = liquidInput.value;

//Body Part
const bodyPartInput = document.getElementById('bodyPart');
const bodyPart = bodyPartInput.value;

//Function
function generateMadLibs() {
    const typeOfBird = getInputValue("typeOfBird");
    const roommateName = getInputValue("roommateName");
    const noun = getInputValue("noun");
    const liquid = getInputValue("liquid");
    const bodyPart = getInputValue("bodyPart");
    const paragraph = document.getElementById('mad-libs');
    paragraph.textContent = `It was a cold October day. I woke to the smell of ${typeOfBird} 
    roasting in the kitchen. My roommate said "See if ${roommateName} needs a fresh ${noun}." 
    So I carried a glass of ${liquid} into ${roommateName}'s room. When I got there I couldn't believe my ${bodyPart}.`;
}

function getInputValue(id) {
    const input = document.getElementById(id);
    return input.value;
}