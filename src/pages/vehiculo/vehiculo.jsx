// Esto al final no se utilizara
import HeaderComp from "../../components/header";
import Footer from "../../components/footer";
import "../../../public/css/vehiculo.css";

const Vehiculo = () => {
  return (
    <>
      <HeaderComp />
      <section>
        <div className="titulo-vehiculo">
          <h2 className="h2-vehiculo">Nombre del vehiculo seleccionado</h2>
        </div>

        <div className="container-vehiculo">
          <div className="imagen-vehiculo">
            <img srcSet="../../../public/img/img1.avif" alt="" />
          </div>

          <div className="informacion-vehiculo">
            <h3>Nombre vehiculo</h3>
            <p>
              Informacion vehiculo: Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ad, reiciendis! Sequi ratione similique saepe
              quidem cupiditate distinctio beatae enim odio!
            </p>
            <p>Precio fianza: 300eu</p>
            <p>Precio alquiler dia: 50eu</p>
            <div className="fechas-reserva-vehiculo">
              <p>Fecha recogida</p>
              <p>Fecha devolucion</p>
            </div>
            <button>Consultar</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Vehiculo;
