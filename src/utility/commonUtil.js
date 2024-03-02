export const removeUnderscores = (inputString) => {
    return inputString.replace(/_/g, ' ').toUpperCase();
}


export const removeExtraSpaces = (inputString) => {
    return inputString.replace(/\s+/g, ' ').trim();
}