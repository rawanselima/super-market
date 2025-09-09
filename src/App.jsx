import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Products from "./pages/Products";
import DetailsProduct from "./pages/DetailsProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products/:id",
          element: <DetailsProduct />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: "#efefef",
            color: "#253d4e",
          },

          success: {
            duration: 3000,
            iconTheme: {
              primary: "green",
              secondary: "#fff",
            },
          },
        }}
      />
      ,
    </>
  );
}

export default App;
