import { useState } from "react";
import { Camisas } from "../../modelos/Camisas";
import { ARREGLO_CAMISAS } from "../../mocks/Camisas-mocks";
import { ARREGLO_CAMISAS_TALLA } from "../../utilidades/dominios/DomTalla";
import { NavLink } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

export const CamiAdmin = () => {
  const [arrCamisas] = useState<Camisas[]>(ARREGLO_CAMISAS);

  const [objCam, setObjCam] = useState<Camisas>(
    new Camisas(0, "", "", "", "", "")
  );
  const [show, setShow] = useState<boolean>(false);
  const handeClose = () => {
    setShow(false);
  };

  const obtenerTalla = (valor: string) => {
    for (const objTalla of ARREGLO_CAMISAS_TALLA) {
      if (objTalla.codTalla == valor) {
        return objTalla.talla;
      }
    }
  };

  const eliminarCamisa = (codigo: number) => {
    const cantidad = arrCamisas.length;

    for (let i = 0; i < cantidad; i++) {
      if (arrCamisas[i] != undefined) {
        const comparar = arrCamisas[i].codCamisa;

        if (comparar == codigo) {
          arrCamisas.splice(i , 1);
        }
      }
    }
  };

  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th style={{ width: "10%" }} className="text-center">
                  Codigo
                </th>
                <th style={{ width: "20%" }} className="text-center">
                  Marca
                </th>
                <th style={{ width: "20%" }} className="text-center">
                  Color
                </th>
                <th style={{ width: "20%" }} className="text-center">
                  talla
                </th>
                <th style={{ width: "20%" }} className="text-center">
                  Imagen
                </th>
                <th style={{ width: "10%" }} className="text-center">
                  Opciones
                </th>
              </tr>
            </thead>
            <tbody>
              {arrCamisas.map((miCami: Camisas) => (
                <tr className="align-middle" key={miCami.codCamisa}>
                  <td className="text-center">{miCami.codCamisa}</td>
                  <td className="text-center">{miCami.marcaCamisa}</td>
                  <td className="text-center">{miCami.colorCamisa}</td>
                  <td className="text-center">
                    {obtenerTalla(miCami.tallaCamisa)}
                  </td>
                  <td>
                    <img
                      src={miCami.imagenCamisaBase64}
                      alt=""
                      className="imagenListado"
                    />
                    <div className="text-info">{miCami.imagenCamisa}</div>
                  </td>
                  <td>
                    <a
                      href="/#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShow(true);
                        setObjCam(miCami);
                      }}
                    >
                      <i
                        className="fa-solid fa-trash"
                        style={{ color: "#ff0000" }}
                      ></i>
                    </a>{" "}
                    <NavLink to={"/actualcami/" + miCami.codCamisa}>
                      <i
                        className="fa-solid fa-pen-to-square"
                        style={{ color: "#00913f" }}
                      >
                        {" "}
                        &nbsp;
                      </i>
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Modal show={show} onHide={handeClose} backdrop="static" keyboard={false}>
              <Modal.Header>
                <Modal.Title>
                  eliminar camisa
                </Modal.Title>
              </Modal.Header>
                <Modal.Body>
                  <h3> Esta seguro de que desea eliminar ? {objCam.marcaCamisa}, {objCam.colorCamisa}</h3>
                
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondari" onClick={(e)=>{setShow(false)}}>Cancelar</Button>
                  <Button variant="danger" onClick={(e)=>{eliminarCamisa(objCam.codCamisa); setShow(false)}}>eliminar</Button>
                </Modal.Footer>
              
          </Modal>
        </div>
      </div>
    </>
  );
};
