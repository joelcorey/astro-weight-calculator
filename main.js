// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

// Bonus Challenges
// 8. Reverse the drop down order so that the sun is first.

function reversePlanets() {
    let newArray = [];
    for (let i = planets.length - 1; i >= 0; i--) {
        newArray.push(planets[i]);
    }
    return newArray;
}
let newPlanets = reversePlanets();

// We are going to solve this by breaking the problem into three parts.
// Programmers like automating things, we'll populate the HTML drop down options using code,
// instead of having to type out all the values.
// Create a function that does the some math and gives us the new weight.
// Then create a function that responds when the user clicks on the button.

// 1. Populate the dropdown element with the data found in the planets array.
// The value of each option should be the planet's name.
// Use the following built-in methods:
// `.forEach` `document.createElement` `document.getElementById` `.appendChild`
let dropdown = document.getElementById('planets');
planets.forEach(planet => {
    let newOption = document.createElement('option');
    newOption.innerText = planet[0]
    dropdown.appendChild(newOption);
});

function calculateWeight(weight, planetName) {
    // 2. Write the code to return the correct weight
    let newWeight;
    let statement;
    planets.forEach(planet => {
        if(planet[0] === planetName) {
            newWeight = parseInt(weight) * planet[1];
            statement = `If you were on ${planetName}, you would weight ${newWeight} lbs!`;
        }
    })
    return statement;
}

function handleClickEvent(e) {
    
    // 3. Create a variable called userWeight and assign the value of the user's weight.
    let userWeight = document.getElementById('user-weight').value;

    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
    planetName = document.getElementById('planets').value;
   
    // 5. Create a variable called result and assign the value of the new calculated weight.
    let result = calculateWeight(userWeight, planetName);
    if(Number.isNaN(result)) result = "Please input a proper weight";
    if(userWeight === 'cat') result = "It's cat's all the way down! Run for your life!"

    // 6. Write code to display the message shown in the screenshot.
    document.getElementById('output').innerHTML = result;
}

// 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.

// 8. Make it look nice by attaching  a style.css file to your index.html and writing some basic styling,
// feel free to add classes and id's to the HTML elements as you need,
// import.a google font and use it for some or all of the text on your page.


