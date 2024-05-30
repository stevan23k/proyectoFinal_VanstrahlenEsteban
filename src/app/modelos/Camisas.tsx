export class Camisas {
  public codCamisa: number;
  public marcaCamisa: string;
  public colorCamisa: string;
  public tallaCamisa: string;
  public imagenCamisa: string;
  public imagenCamisaBase64: string;

  constructor(
    cod: number,
    mar: string,
    col: string,
    tal: string,
    img: string,
    base: string
  ) {
    this.codCamisa = cod;
    this.marcaCamisa = mar;
    this.colorCamisa = col;
    this.tallaCamisa = tal;
    this.imagenCamisa = img;
    this.imagenCamisaBase64 = base;
  }
}
