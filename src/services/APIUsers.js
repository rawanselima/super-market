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

export async function allUsers() {
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

export async function users({ searchValue, page, limit }) {
  let response = "";
  let allResponse = "";

  try {
    if (searchValue !== "all" && searchValue !== "undefined" && searchValue) {
      response = await fetch(
        `${API_BASE_2}users?name=${searchValue}&page=${page}&limit=${limit}`
      );
      allResponse = await fetch(`${API_BASE_2}users?name=${searchValue}`);
    } else {
      response = await fetch(`${API_BASE_2}users?page=${page}&limit=${limit}`);
      allResponse = await fetch(`${API_BASE_2}users`);
    }

    if (!allResponse.ok || !response.ok)
      throw new Error("failed register now try again");

    const data = (await response.json()) || [];
    const allData = (await allResponse.json()) || [];

    const countUsers = allData.length;
    const totalPages = Math.ceil(countUsers / limit) || 1;

    return { data, totalPages };
  } catch (error) {
    return { data: [], totalPages: 1 };
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

export async function userDetails(userId) {
  if (!userId) return;
  try {
    const response = await fetch(`${API_BASE_2}users/${userId}`);
    if (!response.ok) throw new Error("failed find user ");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export async function userOrders(userId) {
  if (!userId) return;
  try {
    const response = await fetch(`${API_BASE_2}orders?userId=${userId}`);
    if (!response.ok) throw new Error("failed find user ");
    const data = await response.json();

    return data;
  } catch (error) {
    return [];
  }
}
