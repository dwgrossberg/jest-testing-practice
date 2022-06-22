const caeserCipher = (key, string) => {
  const re = /[a-zA-Z]/;
  let cipher = "";
  for (let i = 0; i < string.length; i++) {
    if (re.test(string.charAt(i))) {
      cipher += String.fromCharCode(
        ((string.charCodeAt(i) - 97 + key) % 26) + 97
      );
    } else {
      cipher += string.charAt(i);
    }
  }
  return cipher;
};

export default caeserCipher;
