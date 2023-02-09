/**
 * Add a capital letter to string
 * @param {string} string - The string
 * @returns {string} String with a capital letter added
 */
export const addCapitalLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};