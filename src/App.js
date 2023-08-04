import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Routes/Routes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <div className='max-w-[1440px] mx-auto overflow-hidden'>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
