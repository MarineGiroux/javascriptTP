const mysteriousString = `iu@zfiz)!uzqzf!snoi??alutargnocze&gfuzyafzygfzmgfu%f`;
console.log('step 0 : ', mysteriousString);

// step1 : split the mysterious string into an array, so that each letter becomes an item (the separator should be an empty string).
const step1 = mysteriousString.split("");
console.log('step 1 : ', step1);

// step2 : get a slice of the array : take elements from the 15th included to the 32nd excluded (remember indexes start at 0!)
const step2 = step1.slice(15, 31); 
console.log('step 2 : ', step2);

// step3 : Splice the array to replace 2 elements from index 5 with only one element: the letter 't'
const step3 = step2.slice(); 
step3.splice(4, 2, 't');
console.log('step 3 : ', step3);

// step4 : reverse the array
const step4 = step3.reverse(); 
console.log('step 4 : ', step4);

// step5 : join each element of the array back into a string (the separator should be an empty string)
const step5 = step4.join(""); 
console.log('step 5 : ', step5);