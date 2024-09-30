
let data = null;

// function clearData() {
//   const locationContent = document.querySelector("#location-content");
//   locationContent.innerHtml = "";
//   const weatherContent = document.querySelector("#weather-content");
//   weatherContent.innerHtml = "";


// }

export async function fetchWithHandling(url) {

  try {
    // clearData();

    const response = await fetch(url);
    // Check for HTTP errors
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Handle different types of responses
    const contentType = response.headers.get("Content-Type");

    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
      // console.log(data);
      // console.log(data.resolvedAddress);
      
        return data;
    } else {
      return null; // Return null for no data
    }
  } catch (error) {
    console.error("Fetch error: ", error.message);
    return null; // Optionally return null or throw further up
  }
}

// export function getWeatherData() {
//   return weatherData; // Can be null if fetch hasn't been called yet
// }


  
