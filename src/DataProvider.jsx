import { createContext, useState } from "react";
import fetchData from "./data.json";

const DataContext = createContext({});


export function DataProvider({children}) {
  const [data, setData] = useState(fetchData);
  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
