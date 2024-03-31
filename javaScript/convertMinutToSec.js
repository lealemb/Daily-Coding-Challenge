/**Write a function that takes an integer minutes and converts it to seconds.

Examples
convert(5) ➞ 300

convert(3) ➞ 180

convert(2) ➞ 120
**/



function convert(minutes) {
	 if (typeof minutes !== "number") {
       return "You entered a string. Please enter a postive number";
     } else if (minutes < 0) {
       return "You entered a negative number. Please enter a positive number";
     } else {
       return minutes * 60;
     }
	
}
