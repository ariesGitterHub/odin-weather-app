
let data = null;

// export async function fetchWithHandling(url) {
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const contentType = response.headers.get("Content-Type");

//     if (contentType && contentType.includes("application/json")) {
//       data = await response.json();

//       return data;
//     } else {
//       return null;
//     }
//   } catch (error) {
//     console.error("Fetch error: ", error.message);
//     return null; 
//   }
// }

export async function fetchWithHandling(url) {
  try {
    const response = await fetch(url);

    // Check for HTTP errors
    if (!response.ok) {
      let errorMessage = "An unknown error occurred.";

      switch (response.status) {
        case 400:
          errorMessage =
            "Invalid input: Please check your entries and try again.";
          break;
        case 403:
          errorMessage =
            "Access denied: You do not have permission to access this resource.";
          break;
        case 404:
          errorMessage =
            "The requested resource was not found. Please check the URL and try again.";
          break;
        case 429:
          errorMessage = "Too many requests: Please try again later.";
          break;
        case 500:
          errorMessage =
            "Server error: There is a problem with the service. Please try again later.";
          break;
        default:
          errorMessage = `HTTP error! Status: ${response.status}`;
      }

      return { error: errorMessage };
    }

    const contentType = response.headers.get("Content-Type");

    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
      return data;
    } else {
      return null; // Return null for no data
    }
  } catch (error) {
    console.error("Fetch error: ", error.message);
    return {
      error:
        "Network error: Please check your internet connection and try again.",
    };
  }
}

  
