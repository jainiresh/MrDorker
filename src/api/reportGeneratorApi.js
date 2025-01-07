import axios from "axios";

export const reportGenerateApi = async (data) => {
    try {
        const headers = {
            Authorization: `Bearer ${data.accessToken}`
        }
        // Sending POST request to the server with data
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/report/generate`, data, {headers});

       
        return response.data.message;
    } catch (error) {
        console.error("Error generating report:", error);
        throw new Error("Failed to generate the report. Please try again.");
    }
}
