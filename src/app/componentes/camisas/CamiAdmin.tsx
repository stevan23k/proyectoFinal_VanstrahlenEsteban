export const CamiAdmin = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th style={{ width: "10%" }}>codigo</th>
                <th style={{ width: "50%" }}>marca</th>
                <th style={{ width: "15%" }}>color</th>
                <th style={{ width: "15%" }} className="text-center">talla</th>
                <th style={{ width: "10%" }}>opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>nike</td>
                <td>rojo</td>
                <td className="text-center">L</td>
                <td> <i className="fa-solid fa-pen-to-square" style={{color:"#00913f"}}> &nbsp; <i className="fa-solid fa-trash" style={{color:"#ff0000"}}></i></i> </td>

              </tr>
              <tr>
                <td>2</td>
                <td>adidas</td>
                <td>verde</td>
                <td className="text-center">XL</td>
                <td> <i className="fa-solid fa-pen-to-square" style={{color:"#00913f"}}> &nbsp; <i className="fa-solid fa-trash" style={{color:"#ff0000"}}></i></i> </td>

              </tr>
              <tr>
                <td>3</td>
                <td>puma</td>
                <td>azul</td>
                <td className="text-center">M</td>
                <td> <i className="fa-solid fa-pen-to-square" style={{color:"#00913f"}}> &nbsp; <i className="fa-solid fa-trash" style={{color:"#ff0000"}}></i></i> </td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
