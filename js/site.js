// Get the values from the page
// Start or controller function(s)
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parse into integers
    startValue = parseInt(startValue);
    endValue= parseInt(endValue);

    //validate inputs
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //call generateNumbers
        let numbers = generateNumbers(startValue,endValue);
        
        //call displayNumbers
        displayNumbers(numbers);
    }
    else {
        alert("You must enter integers!")
    }
}

// Generate number from the start value to the end value
// Logic function(s)
function generateNumbers( startValue, endValue){
    let numbers = [];

    for (let i = startValue; i <= endValue; i++) {
        numbers.push(i);   
    }

    return numbers;
}

// Display the numbers and mark even numbers BOLD
// Display or view functions
function displayNumbers(numbers){

    let templateRows = "";
    let className = "even";

    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];
        if (number > 0 && number % 2 === 0) {
            className = "even";
        } else {
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}