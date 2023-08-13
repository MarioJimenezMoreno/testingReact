import "./MainPage.css";
import {Link} from 'react-router-dom'
// import {Link, Routes, Route} from 'react-router-dom'

function MainPage() {
    
  return (
    <div className="container">
    <div className="flex" id="box-1">
        <div id="logo"></div>
        <div className="flex" id="box-nav">
          <div className="flex" id="box-prop">
            <Link to='/login'><h1>LogIn</h1></Link>
            <Link to='/register'><h1>Register</h1></Link>
            <Link to='/app'><h1>App</h1></Link>
          </div>
          <div className="flex" id="box-log">
          <h1>Descargar</h1>
          </div>
        </div>
    </div>
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
  )
}
export default MainPage;