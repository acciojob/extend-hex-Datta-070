const extendHex = (shortHex) => {
  // write your code here
		  String str = "";
  for(let i=1;i<shortHex.length;i++){
    let ascii = shortHex.charCodeAt(i);
    if (!(ascii >= 48 && ascii <= 57) && !(ascii >= 65 && ascii <= 70) && !(ascii >= 97 && ascii <= 102)){
      console.log('Invalid character: ' + shortHex.charAt(i));
      return false;
    }
  }
	if(shortHex.length < 4){
    console.log('Input is too short');
    return false;
  }
  for(let i=1;i<shortHex.length;i++){
    str += shortHex.charAt(i) + shortHex.charAt(i);
  }
  str = "#".concat(str);
  return str;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex");
alert(extendHex(shortHex));
