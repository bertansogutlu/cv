import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {DataProvider} from "./DataProvider"

function App() {
  return (
    <>
      <DataProvider>
        <div className="w-4/5 m-auto">
          <Header />
          <Main />
          <Footer />
        </div>
      </DataProvider>
    </>
  );
}

export default App;
