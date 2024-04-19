import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {DataProvider} from "./DataProvider"

function App() {
  return (
    <div className="dark:bg-[#252128] min-w-96">
      <DataProvider>
        <div >
          <Header />
          <Main />
          <Footer />
        </div>
      </DataProvider>
    </div>
  );
}

export default App;
