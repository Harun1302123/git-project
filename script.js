
var numbers = [1, 2, 3, 4, 5, 6];
function sum(n) {
    var summation = 0;
    //calcultation for summation
    for (let i = 0; i < n.length; i++) {
        summation += n[i];
    }

    return summation;
}


console.log(sum(numbers));
