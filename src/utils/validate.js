export const checkValidData = (email, password) => {
    //regex email validation from portal
    
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email); //It will return true or false inside it is.
    const isPasswordValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password) // It will return ""
   // const isNameValid = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(fname)

    if(!isEmailValid) return "Email Id is not valid"
    if(!isPasswordValid) return "Password is not correct"
 //   if(!isNameValid) return "Name is not correct"

    return null; // It will return correct like if pass or email is correct.
};


