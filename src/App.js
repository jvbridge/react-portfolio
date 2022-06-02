import PortfolioContainer from "./components/PortfolioContainer";
import background from "./components/assets/images/main_background.png";
import Footer from "./components/Footer";
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
        <header className="App-header"></header>
        <PortfolioContainer />
        <Footer />
      </div>
    </div>
  );
}

export default App;
