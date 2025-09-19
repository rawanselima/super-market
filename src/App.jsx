import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainAppLayout from "./pages/MainAppLayout";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Products from "./pages/Products";
import DetailsProduct from "./pages/DetailsProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import AppLayout from "./pages/AppLayout";
import Dashboard from "./pages/Dashboard";
import AllProducts from "./pages/AllProducts";
import Category from "./pages/Category";
import Order from "./pages/Order";
import OrderDetails from "./pages/OrderDetails";
import Customer from "./pages/Customer";
import ReportCustomer from "./pages/ReportCustomer";
import Shipping from "./pages/Shipping";
import Feedback from "./pages/Feedback";
import ProfileUser from "./pages/ProfileUser";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainAppLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "products/:id",
          element: <DetailsProduct />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
        {
          path: "profile",
          element: <ProfileUser />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "allProducts",
          element: <AllProducts />,
        },
        {
          path: "category",
          element: <Category />,
        },
        {
          path: "order",
          element: <Order />,
        },
        {
          path: "order/:id",
          element: <OrderDetails />,
        },
        {
          path: "customer",
          element: <Customer />,
        },
        {
          path: "customer/:id",
          element: <ReportCustomer />,
        },
        {
          path: "shipping",
          element: <Shipping />,
        },
        {
          path: "feedback",
          element: <Feedback />,
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
    </>
  );
}

export default App;
