import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";


function Inicio() {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h1 className="display-5 fw-bold">Inicio</h1>
      </div>
      <Footer />
    </>
  );
}

export default Inicio;