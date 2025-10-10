import { Outlet } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Suspense, useEffect, useState } from "react";
import DataContext from "./DataContext";
import { ToastContainer } from "react-toastify";
import Layout from "./Layout";
import "./index.css";

function App() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
    // .catch(console.log("invalid url"));
  }, []);
  // console.log(apps);

  return (
    <>
      <Header></Header>
      <DataContext.Provider value={apps}>
        <Suspense fallback={<div> Loading...</div>}>
          <Layout>
            <Outlet></Outlet>
          </Layout>
        </Suspense>
      </DataContext.Provider>

      <Footer></Footer>
      <ToastContainer position="bottom-right"></ToastContainer>
    </>
  );
}

export default App;

