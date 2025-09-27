import { API_BASE } from "./APIBase";

export async function fetchProducts() {
  try {
    const response = await fetch(`${API_BASE}products`);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
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

export async function filterProductsByCategory(categoryId) {
  if (categoryId === "all") return;
  try {
    const response = await fetch(
      `${API_BASE}products?categoryId=${categoryId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products by category");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products by category:", error.message);
    throw error;
  }
}
