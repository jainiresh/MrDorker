import axios from "axios";

export const newUserSubscriptionApi = async (data) => {
    try {
        // Sending POST request to the server with data
        const headers = {
            Authorization: `Bearer ${data.accessToken}`
        }
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/newUser`, {email: data.email}, {headers});

        return response.data.success;
    } catch (error) {
        console.error("Error generating report:", error);
        throw new Error("Failed to generate the report. Please try again.");
    }
}
