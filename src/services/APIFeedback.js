import { API_BASE_3 } from "./APIBase";

export async function addFeedback(message) {
  if (!message) return;
  try {
    const response = await fetch(`${API_BASE_3}feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
    if (!response.ok) throw new Error("failed add your feedback , try again");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export async function allFeedback() {
  try {
    const response = await fetch(`${API_BASE_3}feedback`);
    if (!response.ok) throw new Error("failed fetch feedback");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export async function fetchFeedback({ page, limit }) {
  try {
    const response = await fetch(
      `${API_BASE_3}feedback?page=${page}&limit=${limit}`
    );
    if (!response.ok) throw new Error("failed fetch feedback");

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
