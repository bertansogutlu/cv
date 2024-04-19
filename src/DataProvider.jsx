import { createContext, useEffect, useState } from "react";
import localData from "./localData.json";
import axios from "axios";

const DataContext = createContext({});

export function DataProvider({ children }) {
  const [language, setLanguage] = useState("ing");
  const [mode, setMode] = useState(false);
  const [allData, setAllData] = useState({});
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios
      .post("https://reqres.in/api/bertan", localData)
      .then(function (response) {
        console.log(response);
        setAllData(response.data);
        setData(response.data.ing)
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
 
  useEffect(()=>{fetchData()},[])

  const handleLanChange = () => {
    if (language === "ing") {
      setLanguage("tr");
      setData(allData.tr);
    } else {
      setLanguage("ing");
      setData(allData.ing);
    }
  };

  const handleModeChange = () => {
    setMode(!mode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <DataContext.Provider
      value={{ data, handleLanChange, language, handleModeChange, mode, loading }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
