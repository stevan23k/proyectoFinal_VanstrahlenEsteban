import fotoPerfil1 from "../../../assets/img/fotoPerfil.png";
import fotoPerfil2 from "../../../assets/img/fotoPerfil2.png";
import fotoPerfil3 from "../../../assets/img/fotoPerfil3.png";
import fotoPerfil4 from "../../../assets/img/fotoPerfil4.png";
import fotoPerfil5 from "../../../assets/img/fotoPerfil5.png";

export const Acerca = () =>{
    return(
        <>
      <section className="bg-light pb-4">
        <div className="container-fluid">
          <div className="row pt-2">
            <div className="col-12">
              <h3 className="border-bottom mb-4">Acerca de</h3>
              <h1 className= "mb-4">profe la quiero mucho</h1>
              
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 mb-3 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Samanta Alexadra Sandoval</h5>
                  <p className="card-text">Desarrolladora Senior</p>
                  <div className="text-center ">
                    <img src={fotoPerfil1} alt="Foto developer" width="220px" height="auto" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-3 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Roberto Espinosa Saldarriaga</h5>
                  <p className="card-text">Desarrollador Junior</p>
                  <div className="text-center ">
                    <img src={fotoPerfil2} alt="Foto developer" width="220px" height="auto" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-3 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Catlo Alirio Ortegón</h5>
                  <p className="card-text">Desarrollador Bru</p>
                  <div className="text-center ">
                    <img src={fotoPerfil3} alt="Foto developer" width="220px" height="auto" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-3 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Luz Elena Gutiérrez López</h5>
                  <p className="card-text">La profe</p>
                  <div className="text-center ">
                    <img src={fotoPerfil4} alt="Foto developer" width="220px" height="auto" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-3 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Viv Oen Ellimbo</h5>
                  <p className="card-text">Ni practico ni nah</p>
                  <div className="text-center ">
                    <img src={fotoPerfil5} alt="Foto developer" width="220px" height="auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    );
};