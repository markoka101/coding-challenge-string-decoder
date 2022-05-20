const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const decode = code => {
    let shift = code.charAt(0);
    let dcode = [];
    
    for (let i = 1; i < code.length; i++) {
        //grab location of original letter and add the shift value
        let loc = alphabet.indexOf(code[i]);
        let newLoc = Number(loc) + Number(shift);

        //when the new value is too big it subtracts 26 so that new value is in range
        if (newLoc > 25) {
            newLoc -= 26;
        }

        //push new code into array
        dcode.push(alphabet.charAt(newLoc));
    }
    //convert array into string and get rid of commas
    return dcode.join('');
}

console.log(decode('2apzeyazsdh'));

