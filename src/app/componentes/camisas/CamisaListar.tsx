export const CamiListar = () => {
  return (
    <div className="pt-5 d-flex justify-content-center">
      <div className="col-md-8">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th style={{width:"10%"}}>codigo</th>
              <th style={{width:"50%"}}>marca</th>
              <th style={{width:"20%"}}>color</th>
              <th style={{width:"20%"}} className="text-center">talla</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>nike</td>
              <td>rojo</td>
              <td className="text-center">L</td>
            </tr>
            <tr>
              <td>2</td>
              <td>adidas</td>
              <td>verde</td>
              <td className="text-center">XL</td>
            </tr>
            <tr>
              <td>3</td>
              <td>puma</td>
              <td>azul</td>
              <td className="text-center">M</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
