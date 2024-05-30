import { useState } from "react";
import { Camisas } from "../../modelos/Camisas";
import { ARREGLO_CAMISAS } from "../../mocks/Camisas-mocks";
import { ARREGLO_CAMISAS_TALLA } from "../../utilidades/dominios/DomTalla";

export const CamiListar = () => {
  
  
  const [arrCamisas] = useState<Camisas[]>(ARREGLO_CAMISAS);

  const obtenerTalla = (valor: string) => {
    for (const objTalla of ARREGLO_CAMISAS_TALLA) {
      if (objTalla.codTalla == valor) {
        return objTalla.talla;
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
                <th style={{ width: "10%" }} className="text-center">Codigo</th>
                <th style={{ width: "30%" }} className="text-center">Marca</th>
                <th style={{ width: "20%" }} className="text-center">Color</th>
                <th style={{ width: "20%" }} className="text-center">Precio</th>
                <th style={{ width: "20%" }} className="text-center">talla</th>
                <th style={{ width: "20%" }} className="text-center">Imagen</th>
              </tr>
            </thead>
            <tbody>
              {arrCamisas.map((miCami: Camisas) => (
                <tr className="align-middle" key={miCami.codCamisa}>
                  <td className="text-center">{miCami.codCamisa}</td>
                  <td className="text-center">{miCami.marcaCamisa}</td>
                  <td className="text-center">{miCami.colorCamisa}</td>
                  <td className="text-center">${miCami.precioCamisa}</td>

                  <td className="text-center">
                    {obtenerTalla(miCami.tallaCamisa)}
                  </td>
                  <td>
                    <img src={miCami.imagenCamisaBase64} alt="" className="imagenListado"/>
                    <div className="text-info">
                      {miCami.imagenCamisa}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
