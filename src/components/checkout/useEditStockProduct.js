import { editProduct, fetchProductsDetails } from "@/services/APIProducts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useEditStockProduct() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async ({ productId, size, quantity, isIncrease }) => {
      const product = await fetchProductsDetails(productId);

      if (!product?.sizes) throw new Error("Product sizes not found");

      const updatedSizes = product.sizes.map((ele) =>
        ele.size === size
          ? {
              ...ele,
              stock: isIncrease
                ? Number(ele.stock) + Number(quantity)
                : Number(ele.stock) - Number(quantity),
            }
          : ele
      );

      const updatedProduct = { ...product, sizes: updatedSizes };

      const data = await editProduct({
        productId,
        updatedProduct,
      });

      return data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  return { mutateAsync, isPending };
}
