import "./App.css";
import TopHeader from "./Components/TopHeader";
import Card from "./Components/Card";
import requests from "./requests";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Tabs from "./Components/Tabs";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Navbar />
      <Banner />
      <Tabs />
      <Card title="Trending Now" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
