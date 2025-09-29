import { API_BASE } from "./APIBase";

export async function fetchProducts(categoryId, page, limit, searchValue) {
  try {
    let response;
    let allResponse;

    const searchParam =
      searchValue && searchValue !== "all" ? `&name=${searchValue}` : "";

    if (categoryId === "all") {
      response = await fetch(
        `${API_BASE}products?page=${page}&limit=${limit}${searchParam}`
      );
      allResponse = await fetch(`${API_BASE}products?${searchParam}`);
    } else {
      response = await fetch(
        `${API_BASE}products?categoryId=${categoryId}&page=${page}&limit=${limit}${searchParam}`
      );
      allResponse = await fetch(
        `${API_BASE}products?categoryId=${categoryId}${searchParam}`
      );
    }

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    const allData = await allResponse.json();

    const countProducts = allData.length;
    const totalPages = Math.ceil(countProducts / limit);

    return { data, totalPages };
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return { data: [], totalPages: 0 };
  }
}

export async function fetchProductsDetails(productId) {
  try {
    const response = await fetch(`${API_BASE}products/${productId}`);
    if (!response.ok) {
      throw new Error("Failed Fetch Details For This Product");
    }

    const data = response.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export async function addProduct(product) {
  try {
    const response = await fetch(`${API_BASE}products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error("Failed to add product");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
}

export async function deleteProduct(productId) {
  try {
    const response = await fetch(`${API_BASE}products/${productId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(data.message || "Failed to delete product");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
}

export async function editProduct({ productId, updatedProduct }) {
  try {
    const response = await fetch(`${API_BASE}products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });

    if (!response.ok) {
      throw new Error("Failed to update product");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
}
