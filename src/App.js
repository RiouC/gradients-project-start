import GradientsApp from "./components/GradientsApp";
import Footer from "./components/Footer";
import GradientsHeader from './components/GradientsHeader'

function App() {
  return (
    <div className="App min-vh-100 d-flex flex-column">
      <GradientsHeader />
      <h1 className="text-center my-4">Alyra Gradients</h1>
      <main className="container">
        <GradientsApp />
      </main>
      <Footer />
    </div>
  );
}

export default App;
