import { createContext, useState } from "react";
import fetchData from "./fetchData.json";

const DataContext = createContext({});


export function DataProvider({children}) {
  const [language, setLanguage] = useState("ing")
  const [mode, setMode] = useState(false)
  const [allData, setAllData] = useState(fetchData);
  const [data, setData] = useState(allData.ing)

  const handleLanChange = () => {
    if(language === "ing") {
      setLanguage("tr")
      setData(allData.tr)
    } else{
      setLanguage("ing")
      setData(allData.ing)
    }
  }

  const handleModeChange = () => {
    setMode(!mode)
  }

  return (
    <DataContext.Provider value={{data,handleLanChange,language,handleModeChange,mode}}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
