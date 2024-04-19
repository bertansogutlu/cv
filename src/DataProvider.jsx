import { createContext, useEffect, useState } from "react";
import localData from "./localData.json";
import axios from "axios";
import useLocalStorage from "./hooks/useLocalStorage";

const DataContext = createContext({});

export function DataProvider({ children }) {
  
  const [language, setLanguage] = useLocalStorage("lang",navigator.language.includes('tr') ? "tr" : "ing");
  const [mode, setMode] = useLocalStorage("mode",window.matchMedia('(prefers-color-scheme: dark)').matches);
  const [allData, setAllData] = useState({});
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios
      .post("https://reqres.in/api/bertan", localData)
      .then(function (response) {
        console.log(response);
        setAllData(response.data);
        setData(response.data[language])
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
 
  useEffect(()=>{
    if(mode) {document.documentElement.classList.add("dark")}
    fetchData()},[])

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
