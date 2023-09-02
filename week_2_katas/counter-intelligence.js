// Please do not change the name of this function
const counterIntelligence = (str) => {
  

let numberValues  = {};
let letterValues = {};
for (let i = 1; i <= 26; i++) {
    numberValues[i] = String.fromCharCode(i + 64);
    letterValues[String.fromCharCode(i+ 96)] = i
    letterValues[String.fromCharCode(i + 64)] = i
}

  let decodedString = ''
  const endLetter = str.slice(-1)
  const shift = letterValues[endLetter]-24
  let regex = /[a-zA-Z]/;

  for (let i = 0; i < str.length; i++) {

    if (regex.test(str[i])){
      let strNumber = letterValues[str[i]]
      let shiftedNumber = ((strNumber-shift+26) % 26)
      if (shiftedNumber===0){shiftedNumber = 26}
      let decodedChar = numberValues[shiftedNumber]
      decodedString += decodedChar
    }else{
      decodedString += str[i]
    }
  }

  return decodedString
};

module.exports = { counterIntelligence };
