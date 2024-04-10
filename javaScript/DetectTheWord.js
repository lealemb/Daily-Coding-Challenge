//detect the word from the give string or input strings upporcase from lower and write that detected word in one variable.
function findHiddenWord(a){
    let hiddenWordContainer = "";
    for(let i = 0; i < a.length; i++){
        let singleLetter = a.charAt(i);
        if (singleLetter !== singleLetter.toUpperCase()){
            hiddenWordContainer += singleLetter;
        } 
    }
    return hiddenWordContainer;
}
console.log(findHiddenWord("bEFGBu"));
