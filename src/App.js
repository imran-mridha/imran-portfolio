import "./App.css";
import {RouterProvider} from 'react-router-dom';
import { router } from "./Routes/Router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
