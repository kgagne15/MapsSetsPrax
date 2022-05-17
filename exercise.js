//What does the following code return?

new Set([1,1,2,2,3,4]) // {1, 2, 3, 4}

//What does the following code return?

// [...new Set("referee")].join("") // ref

//What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// {[1, 2, 3]: true, [1, 2, 3]: false}

//Write a function called hasDuplicate which accepts an array and returns
//true or false if that array contains a duplicate

function hasDuplicate(arr) {
    const dupeSet = new Set(arr);
    if (arr.length === dupeSet.size) {
        return false;
    } else {
        return true; 
    }
}


//Write a function called vowelCount which accepts a string and returns
//a map where the keys are numbers and the values are the count of the
//vowels in the string
//had to use solution

function vowelCount(str) {
    let vowels = 'aeiou';
    const map = new Map(); 
    for (let s of str) {
        let lowCase = s.toLowerCase(); 
        if (vowels.includes(lowCase)) {
            if(map.has(lowCase)) {
                map.set(lowCase, map.get(lowCase) + 1)
            } else {
                map.set(lowCase, 1);
            }
        }
    }
    return map; 
}