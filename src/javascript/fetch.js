export async function fetchWithHandling(url) {
//   const weatherContent = document.querySelector("#weather-content");

  const showRawData = document.querySelector("#show-raw-data");


  try {
    const response = await fetch(url);

    // Check for HTTP errors
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Handle different types of responses
    const contentType = response.headers.get("Content-Type");

    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      console.log(data);
      
        showRawData.textContent = data;
    } else {
      // Handle empty responses or unsupported content types
      return null; // Return null for no data
    }
  } catch (error) {
    console.error("Fetch error: ", error.message);
    return null; // Optionally return null or throw further up
  }
}
