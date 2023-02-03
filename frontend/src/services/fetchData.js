
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
