import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { router } from "./Routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
