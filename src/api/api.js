const url = import.meta.env.VITE_API_URL;
const username = import.meta.env.VITE_API_USERNAME;
const password = import.meta.env.VITE_API_PASSWORD;

let auth = btoa(`${username}:${password}`);

const api = {
  async getPatients() {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Basic ${auth}`,
        },
      });

      if (!response.ok) throw new Error(`Failed to fetch patients: ${response.status} ${response.statusText}`);

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error("API Error: ", error);
      return { success: false, error: error.message };
    }
  },
};

export default api;