import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Str1 from './Components/Str1.jsx';
import Str2 from './Components/Str2/Str2.jsx';
import StrSertificats from './Components/StrSertificats.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: "/",
          element: <Str1 />,
        },
        {
          path: "/contaktArena",
          element: <Str2 />,
        },
        {
          path:"/sertificats",
          element:<StrSertificats></StrSertificats>
        }
      ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)