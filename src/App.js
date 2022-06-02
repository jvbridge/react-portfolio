import Header from "./components/Header";
import Footer from "./components/Footer";
import background from "./components/assets/images/main_background.png";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url("${background}")`,
        height: "100vh",
      }}
    >
      <div
        className="mask"
        style={{
          backgroundColor: " rgba(0, 0, 0, 0.8)",
          backgroundRepeat: "no-repeat",
          backgroundSize: " auto",
          height: "100vh",
        }}
      >
        <Header className="App-header"></Header>
        <Footer />
      </div>
    </div>
  );
}

export default App;
