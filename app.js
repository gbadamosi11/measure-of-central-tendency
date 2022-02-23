

// Button
let button = document.querySelector('#calculate');

// Input
let numbers = document.querySelector('#numbers');

// Display Result 
let meanResult  = document.querySelector('#mean');
let medianResult  = document.querySelector('#median');
let modeResult  = document.querySelector('#mode');

button.addEventListener("click", (e)=>{
        e.preventDefault();

        // get input value
        // convert values to an array
        // map each value to a Number method ( change each value into an integer)
        let value = Array.from(numbers.value).map(Number);
        
        
        if(value){
            medianResult.textContent = median(value);
            modeResult.textContent = mode(value).toString();
            meanResult.textContent =  mean(value);
        }


        // Clear the input field
        numbers.value = ' ';
    }
)


function mean(array){
    let mean = array.reduce((a, b) => a + b, 0);
    // for(let i = 0; i < array.length; i++){
    //     sum += array[i];
    // }
    return mean / array.length;
}

function median(array){
    const arraySorted = array.sort((a, b) => a - b);
    return arraySorted.length % 2 === 0 ? (arraySorted[arraySorted.length/2 - 1] +  arraySorted[arraySorted.length / 2]) / 2 :
            arraySorted[Math.floor(arraySorted.length / 2)];
}
 
function mode(array){
    const frequency = {};
    array.forEach(elem => frequency[elem] = frequency[elem] + 1 || 1);

    let modes = [];
    let maxFrequency = 0;

    for(const key in frequency){
        if(frequency[key] > maxFrequency){
            modes = [Number(key)];
            maxFrequency = frequency[key];
        }
        else if(frequency[key] === maxFrequency){
            modes.push(Number(key));
        }
    }

    if(modes.length === Object.keys(frequency).length) modes = [];

    return modes;
}

