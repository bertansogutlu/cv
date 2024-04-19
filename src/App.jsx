import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { useContext, useEffect } from "react";
import DataContext from "./DataProvider";

function App() {
  const { loading } = useContext(DataContext);
  useEffect(()=>{console.log(loading)},[loading])
  
  return (
    <div className="dark:bg-[#252128] min-w-96">
      
        {loading ? (
          <p>loading...</p>
        ) : (
          <div>
            <Header />
            <Main />
            <Footer />
          </div>
        )}
    </div>
  );
}

export default App;
