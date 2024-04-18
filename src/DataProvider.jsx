import { createContext, useState } from "react";
import fetchData from "./fetchData.json";

const DataContext = createContext({});


export function DataProvider({children}) {
  const [data, setData] = useState(fetchData.ing);
  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
