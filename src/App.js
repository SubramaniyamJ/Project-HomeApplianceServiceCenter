import React from "react";
import { useRef , useState} from "react";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Pricing from "./components/Pricing";
import Service from "./components/Service";
import RedirectPage from "./components/RedirectPage"
import ComplaintForm from './components/WarrentyService';
import { createContext } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import { userContext } from "./components/Context";
import RepairForm from "./components/RepairForm";


const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/service" element={<Service />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/warrentyservice" element={<ComplaintForm/>} />
      <Route path="/refrigirator" element={<RepairForm machine = "Refrigirator"/>} />
      <Route path="/washingmachine" element={<RepairForm machine = "Washing Machine"/>} />
      <Route path="/television" element={<RepairForm machine = "Television"/>} />
      <Route path="/microwaveoven" element={<RepairForm machine = "MicroWave Oven"/>} />
      <Route path="/airconditioner" element={<RepairForm machine = "Air Conditioner"/>} />
      <Route path="/homeredirect" element={<RedirectPage/>} />
    </Route>
  )
);

function App() {
  const [user, setuser] = useState("");
  return (
    <div>
      <userContext.Provider value={[user, setuser]}>
        <RouterProvider router={route} />
      </userContext.Provider>
    </div>
  );
}

export default App;
