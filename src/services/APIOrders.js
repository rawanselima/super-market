import { API_BASE_2 } from "./APIBase";

export async function fetchOrders(status, page, limit, searchValue) {
  try {
    let response;
    let allResponse;
    let url;

    if (searchValue !== "all") url = `userName=${searchValue}`;

    if (status === "all") {
      response = await fetch(
        `${API_BASE_2}orders?page=${page}&limit=${limit}&${url}`
      );
      allResponse = await fetch(`${API_BASE_2}orders?${url}`);
    } else {
      response = await fetch(
        `${API_BASE_2}orders?status=${status}&page=${page}&limit=${limit}&${url}`
      );
      allResponse = await fetch(`${API_BASE_2}orders?status=${status}&${url}`);
    }

    if (!response.ok || !allResponse.ok)
      throw new Error("failed to add new order");

    const data = await response.json();
    const allData = await allResponse.json();

    const countOrders = allData.length;
    const totalPages = Math.ceil(countOrders / limit);

    console.log(data);
    return { data, totalPages };
  } catch (error) {
    return { data: [], totalPages: 1 };
  }
}

export async function addOrder(newOrder) {
  if (!newOrder) return;
  try {
    const response = await fetch(`${API_BASE_2}orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });
    if (!response.ok) throw new Error("failed to add new order");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export async function editOrder({ orderId, newOrder }) {
  if (!orderId || !newOrder) return;

  try {
    const response = await fetch(`${API_BASE_2}orders/${orderId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });
    if (!response.ok) throw new Error("failed edit order");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
