import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { lazy } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Protected from "./components/login/Protected";
const MainAppLayout = lazy(() => import("./pages/MainAppLayout"));
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const DetailsProduct = lazy(() => import("./pages/DetailsProduct"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AllProducts = lazy(() => import("./pages/AllProducts"));
const Category = lazy(() => import("./pages/Category"));
const Order = lazy(() => import("./pages/Order"));
const OrderDetails = lazy(() => import("./pages/OrderDetails"));
const Customer = lazy(() => import("./pages/Customer"));
const ReportCustomer = lazy(() => import("./pages/ReportCustomer"));
const Shipping = lazy(() => import("./pages/Shipping"));
const Feedback = lazy(() => import("./pages/Feedback"));
const ProfileUser = lazy(() => import("./pages/ProfileUser"));

function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
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
      element: (
        <Protected>
          <AppLayout />
        </Protected>
      ),
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
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
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
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
