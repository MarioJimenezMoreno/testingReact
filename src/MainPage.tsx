import "./MainPage.css";
import HeaderMP from './HeaderMP'
import Team from "./Team";

function MainPage() {
    
  return (
    <>
    <div className="container">
    <HeaderMP/>
    <div id="box-2">
        <div className="box_texto flex"> 
          <div className="cont_imagen">
            <img className="imagen" alt="placeholder" />
          </div>
          <div className="textos">
            <h1 className="titulo">Boostea tu PRODUCTIVIDAD</h1>
            <div className="parrafo">
              Con esta aplicación podrás organizarte como nunca antes con la
              revolucionaria tecnologia tortuga
            </div>
          </div>
        </div>
        <div className="box_texto flex der"> 
          <div className="cont_imagen">
            <img className="imagen" alt="placeholder" />
          </div>
          <div className="textos">
            <h1 className="titulo">O tu vida social</h1>
            <div className="parrafo">
              Permite que Tortuga Corporation calcule, analice y recomiende tus actividades de ocio.
            </div>
          </div>
        </div>
      </div>
      </div>
      <Team/>
    </>
  )
}
export default MainPage;