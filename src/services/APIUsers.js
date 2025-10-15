import { API_BASE_2 } from "./APIBase";

export async function addUser(newUser) {
  if (!newUser) return;
  try {
    const response = await fetch(`${API_BASE_2}users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    if (!response.ok) throw new Error("failed register now try again");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export async function users() {
  try {
    const response = await fetch(`${API_BASE_2}users`);
    if (!response.ok) throw new Error("failed register now try again");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export async function deleteUser(userId) {
  if (!userId) return;
  try {
    const response = await fetch(`${API_BASE_2}users/${userId}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("failed delete user try again");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}
