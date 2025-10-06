import { editProduct, fetchProductsDetails } from "@/services/APIProducts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useEditStockProduct() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async ({ productId, size, quantity }) => {
      const product = await fetchProductsDetails(productId);

      const newSizes = product.sizes.map((ele) =>
        ele.size === size ? { ...ele, stock: +ele.stock - +quantity } : ele
      );

      const newProduct = { ...product, sizes: newSizes };

      const data = await editProduct({
        productId: productId,
        updatedProduct: newProduct,
      });

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  return { mutateAsync, isPending };
}
