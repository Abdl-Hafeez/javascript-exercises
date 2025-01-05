const removeFromArray = function(array, ...rest) {
    rest.forEach((r) => {
        let index = array.indexOf(r);
        while (index !== -1) { 
            array.splice(index, 1);
            index = array.indexOf(r); 
        }
    });
    return array; 
};
console.log(removeFromArray(['a', 'b', 'c', 'd', 'x', 'e'], 'x', 'e'));
console.log(removeFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1, 3, 5, 7, 9));
// Do not edit below this line
module.exports = removeFromArray;
 