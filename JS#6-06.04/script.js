let largeValue = (a, b, c) => {
if (a>=b && a>=c) {
    return a;
} else if(b>=a && b>=c){
    return b;
} else{
    return c;
}
   // return a>=b && a>=c ? a : (b>=a && b>=c ? b : c ) ;
}

console.log(largeValue(2, 6, 9));
console.log(largeValue(6, 2, 9));
console.log(largeValue(2, 9, 6));
console.log(largeValue(6, 9, 2));
console.log(largeValue(9, 2, 6));
console.log(largeValue(9, 6, 2));
console.log(largeValue(9, 6, 6));
console.log(largeValue(9, 9, 2));
