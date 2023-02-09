/**
* Async function that sending a POST request to the server with email and password and if valid get token
* @function
* @param {string} email - User email
* @param {string} password - User password
* @returns {string} token - The token returned by the server
*/
export const userSignIn = async (email, password) => {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        const token = data.body.token;
        return token;
    } catch (error) {
        console.error(error);
    }
};

/**
* Async function that fetch the user profile with a POST request to the server with the token
* @function
* @param {string} token - Token of authenticated user
* @returns {Object} profile.body - User profil
*/
export const getProfil = async (token) => {
    const headers = { Authorization: `Bearer ${token}` };

    try {
        const responseProfile = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers,
        });
        const profile = await responseProfile.json();
        return profile.body;
    } catch (error) {
        console.error(error);
    }
};

/**
* Async function that updates user first name and last name with PUT request to the server with token
* @function
* @param {string} token - Token of authenticated user
* @param {string} firstName - Updated user first name
* @param {string} lastName - Updated user last name
* @returns {Object} profile.body - Updated user profil
*/
export const editProfil = async (token, firstName, lastName) => {
    const config = {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
        })
    };

    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", config);
        const profile = await response.json();
        return profile.body;
    } catch (error) {
        console.error(error);
    }
};
