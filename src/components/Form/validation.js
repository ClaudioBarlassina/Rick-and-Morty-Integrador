const regexEmail = "@";
const regexPassword = "!/\d+/";

export const validation = (data) => {

    const errors = {}
    if (!regexEmail.test(data.email)) errors.email = "debe ser un email";
    if (!data.email) errors.email = "este campo es requerido"
    if (data.email.length > 35) errors.email = "el email no puede ser menor a 35 caracteres"
    
    if (!regexPassword.test(data.password)) errors.password = "la contraceña debe tener caracteres y numeros"
    if(data.password.length > 6 || data.password.length <10 )  errors.password ="la contraceña debe tener una longitud 6 y 10 caracteres "
    return errors;
}
