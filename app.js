function mean(array){
    const sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum / array.length;
}

function median(array){
    const arraySorted = array.sort((a, b) => a - b);
    return arraySorted.length % 2 === 0 ? (arraySorted[arraySorted.length/2 - 1] +  arraySorted[arraySorted.length / 2]) / 2 :
            arraySorted[Math.floor(arraySorted.length / 2)];
}
 
function mode(array){}

const data = [1,2,3,4,8,5,9,7];
console.log(median(data));