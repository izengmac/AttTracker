import { validateEmial, validatePassword, validateString } from "../ValidationConstraints";

export const validateInput = (inputId , inputValue) => {
    if(inputId === "fullName"){
        return validateString(inputId , inputValue)
    }else if(inputId === "email"){
        return validateEmial(inputId , inputValue)
    }else if(inputId === "password"){
        return validatePassword(inputId , inputValue)
    }
}