/**
creat afunction if that returns true if the first array can be nested inside the second array. 
if: arr1's min is greater than arr2's min. and 
arr1's  max is lessthan arr2's max
**/
function canNest(arr1, arr2){
    console.log(arr1, arr2);
    if(!(Array.isArray(arr1) && Array.isArray(arr2))){
        return "Both values need to be Array";
    }
    
    let arr1Sorted = arr1.sort((x, y) => x - y);
    console.log("arr1Sorted", arr1Sorted);
    let arr2Sorted = arr2.sort((x, y) => x - y);
    console.log("arr2Sorted", arr2Sorted);

    let arr1min = arr1Sorted[0];
    let arr2min = arr2Sorted[0];
    

    let arr1max = arr1Sorted[arr1Sorted.length - 1];
    let arr2max = arr2Sorted[arr2Sorted.length - 1];

    if (arr1min > arr2min && arr1max < arr2max){
        return true;
    } else {
        return false;
    }

}

console.log(canNest([1,2,3,4], [0,6]));
