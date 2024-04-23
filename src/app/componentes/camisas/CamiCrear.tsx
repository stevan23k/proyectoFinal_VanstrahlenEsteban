export const CamiCrear = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <form className="row g-3 needs-validation" noValidate>
            
            
            <div className="col-md-6">
              <label htmlFor="marc" className="form-label">
                marca
              </label>
              <input
                type="text"
                className="form-control border border-black"
                id="marc"
                name="marc"
                required
              />
            </div>


            <div className="col-md-6">
              <label htmlFor="colo" className="form-label">
                color
              </label>
              <input
                type="text"
                className="form-control border border-black"
                id="colo"
                name="colo"
                required
              />
            </div>


            <div className="col-md-6">
              <label htmlFor="preci" className="form-label">
                precio
              </label>
              <input
                type="text"
                className="form-control border border-black"
                id="preci"
                name="preci"
                required
              />
            </div>


            <div className="col-md-6">
              <label htmlFor="tall" className="form-label">
                talla
              </label>
              <select className="form-select border border-black" id="tall" name="tall" required>
                <option selected disabled value="">
                  selecciones su talla
                </option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>

                
              </select>
            </div>



            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                registrar camisa
              </button>
            </div>


          </form>

        </div>
      </div>
    </>
  );
};
