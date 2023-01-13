const palindrome = (str) => {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== " ") {
      newStr = newStr + str.charAt(i);
    }
  }

  newStr = newStr.toLowerCase();
  console.log(newStr);

  let reversed = "";
  for (let i = newStr.length - 1; i >= 0; i--) {
    reversed = reversed + newStr.charAt(i);
  }
  if (reversed === newStr) {
    return true;
  } else {
    return false;
  }
};

console.log(palindrome("Aromate et Amora"));
