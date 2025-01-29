import { BASE_URL } from "@/constant";

async function makeApiCall(url: string, method = "GET", body: unknown = null) {
  try {
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    // If there's a body (for POST, PUT, etc.), include it in the request
    if (body) {
      options["body"] = JSON.stringify(body);
    }

    const response = await fetch(`${BASE_URL}${url}`, options);
    console.error("Error making API call:response", response.body);

    // Check if the response status is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error making API call:", error, JSON.stringify(error));
    return { error: "All fields are required." };
  }
}

export { makeApiCall };
