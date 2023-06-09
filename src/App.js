import Header from "./components/Header";
import Beranda from "./components/Beranda";
import Menu from "./components/Produk";
import Kontak from "./components/Kontak";
import Mitra from "./components/Mitra";

function App() {
  return (
    <div className="bg-primary">
      <Header />
      <Beranda />
      <Menu />
      <Mitra />
      <Kontak />
    </div>
  );
}

export default App;
