function sortNumbersInarray(numbers)
{
    let j =true;

    while (j) {
        j = false;
        for (let i = 0; i < numbers.length-1;i++)
        {
            if (numbers[i] > numbers[i+1]){
                j = true;
                let temp = numbers[i];
                numbers[i] = numbers[i+1];
                numbers[i+1] = temp;
                
            }
        }
}
    return numbers;
}
console.log(sortNumbersInarray([5,8,113,9,12,56,88]));
