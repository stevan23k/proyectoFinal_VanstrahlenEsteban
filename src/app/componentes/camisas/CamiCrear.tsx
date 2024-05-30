import { useNavigate } from "react-router-dom";
import { ConvertirBase64 } from "../../utilidades/funciones/ConvertirBase64";
import { useState } from "react";
import { Camisas } from "../../modelos/Camisas";
import { ARREGLO_CAMISAS } from "../../mocks/Camisas-mocks";
import { TallaCamisa } from "../../modelos/TallaCamisa";
import { ARREGLO_CAMISAS_TALLA } from "../../utilidades/dominios/DomTalla";
import { useFormulario } from "../../utilidades/misHooks/useFormulario";
import Form from "react-bootstrap/Form";
import noFoto from "../../../assets/img/noDisponible.png";




export const CamiCrear = () => {
  const irsePara = useNavigate();

  type formHtml = React.FormEvent<HTMLFormElement>;
  const [enProceso, setEnProceso] = useState<boolean>(false);
  const [imgBase64, setImgBase64] = useState<any>();
  const [imgMiniatura, setImgMiniatura] = useState<any>(noFoto);

  const [arrCamisas] = useState<Camisas[]>(ARREGLO_CAMISAS)
  const [arrTalla] = useState<TallaCamisa[]>(ARREGLO_CAMISAS_TALLA)

  let {
    marcaCamisa,
    colorCamisa,
    precioCamisa,
    tallaCamisa,
    imagenCamisa,
    dobleEnlace,
    objeto,
  } = useFormulario<Camisas>(new Camisas(0, "", "", "", "", "", ""))

  const enviarForm = (objForm: formHtml) => {
    objForm.preventDefault();
    const formulario = objForm.currentTarget;

    if (formulario.checkValidity() === false) {
      objForm.preventDefault();
      objForm.stopPropagation();
      setEnProceso(true);
    } else {
      const ultimaCami = arrCamisas[arrCamisas.length - 1];
      const nuevoCodigo = ultimaCami.codCamisa + 1;
      objeto.codCamisa = nuevoCodigo;
      objeto.imagenCamisa = imagenCamisa.substring(
        imagenCamisa.lastIndexOf("\\") + 1
      );
      objeto.imagenCamisaBase64 = imgBase64;
      arrCamisas.push(objeto);
      setEnProceso(false);
      irsePara("/listacami");
    }
  }

  const cargarImagen = async (e: any) => {
    const archivos = e.target.files;
    const imagen = archivos[0];
    setImgMiniatura(URL.createObjectURL(imagen));
    dobleEnlace(e);
    const base64 = await ConvertirBase64(imagen);
    setImgBase64(base64);
  };
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <Form className="row g-3 needs-validation" noValidate validated={enProceso} onSubmit={enviarForm}>
            <h5>Crear camisa</h5>

            <div className="col-md-6">
              <div className="mb-3">
                <Form.Group controlId="mar">
                  <Form.Label>
                    <span className="rojito">*</span> marca camisa
                  </Form.Label>
                  <Form.Control className="border border-black" size="sm" required type="text" name="marcaCamisa" value={marcaCamisa} onChange={dobleEnlace} />
                </Form.Group>
              </div>
            </div>


            <div className="col-md-6">
              <div className="mb-3">
                <Form.Group controlId="color">
                  <Form.Label>
                    <span className="rojito">*</span>Color
                  </Form.Label>
                  <Form.Control className="border border-black" size="sm" required type="text" name="colorCamisa" value={colorCamisa} onChange={dobleEnlace} />
                </Form.Group>
              </div>
            </div>


            <div className="col-md-6">
              <div className="mb-3">
                <Form.Group controlId="pre">
                  <Form.Label>
                    <span className="rojito">*</span>Precio
                  </Form.Label>
                  <Form.Control className="border border-black" size="sm" required type="text" name="precioCamisa" value={precioCamisa} onChange={dobleEnlace} />
                </Form.Group>
              </div>
            </div>



            <div className="mb-3">
              <Form.Group controlId="talla">
                <Form.Label>
                  <span className="rojito">*</span>Talla
                </Form.Label>

                <Form.Select
                  size="sm"
                  required
                  name="tallaCamisa"
                  value={tallaCamisa}
                  onChange={dobleEnlace}
                >
                  <option value="">Seleccione una talla</option>

                  {arrTalla.map((miTalla: TallaCamisa) => (
                    <option
                      value={miTalla.codTalla}
                      key={miTalla.codTalla}
                    >
                      {miTalla.talla}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>



            <div>
              <div className="mb-3">
                <Form.Group controlId="fot">
                  <Form.Label>
                    <span className="rojito">*</span> Imágen
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    required
                    type="file"
                    name="imagenCamisa"
                    value={imagenCamisa}
                    onChange={cargarImagen}
                  />
                </Form.Group>
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-center">
                  <img
                    src={imgMiniatura}
                    alt="no foto"
                    className="maximoTamanoCreacion"
                  />
                </div>
              </div>
            </div>




            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                registrar camisa
              </button>
            </div>


          </Form>
        </div>
      </div>
    </>
  );
};
