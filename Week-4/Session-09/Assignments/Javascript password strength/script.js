function isStrongPassword(password) {
    let result = true;
    if (password.length < 8) {
      result = false;
    }
    if (password.toLowerCase().includes("password")) {
      result = false;
    }
    if (!/[A-Z]/.test(password)) {
      result = false;
    }
    console.log(result);
    return result;
  } 
  
isStrongPassword("Qwerty"); // false
isStrongPassword("passwordQwerty"); // false
isStrongPassword("qwerty123"); // false
isStrongPassword("Qwerty123"); // true
