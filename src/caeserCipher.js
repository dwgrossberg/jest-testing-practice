const caeserCipher = (num, string) => {
  const re = /[a-zA-Z]/;
  let cipher;
  for (let i = 0; i < string.length; i++) {
    if (re.test(string.charAt(i))) {
      cipher += i;
    }
  }
  return cipher;
};

export default caeserCipher;
