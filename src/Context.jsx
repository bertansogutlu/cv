import { createContext, useState } from "react";
import fetchData from "./data.json";

const DataContext = createContext({});
const [data, setData] = useState(fetchData);

function Context() {
  return (
    <DataContext.Provider value={data}>
      <Page />
    </DataContext.Provider>
  );
}

export default Context;
