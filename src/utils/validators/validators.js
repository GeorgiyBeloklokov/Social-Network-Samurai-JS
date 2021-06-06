export const required = value => {
if ( value ) return undefined;
return "Field is required";
}

export const maxLengthCreator= (maxLength) => (value) => { // thunkcreator создаем замыкание чтобы вложенная функция получила доступ к родительским данным 77-13:44
if ( value.length > maxLength ) return `Max length is ${maxLength} symbols`;
return undefined;

}


