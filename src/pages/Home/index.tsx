import { Link } from 'react-router-dom';
import { ReactComponent as HomeCar } from 'assets/images/home-car.svg';
import './styles.scss';

function Home() {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-image-container">
          <HomeCar />
        </div>
        <div className="home-content-container">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho.
          </p>
        </div>
      </div>
      <div className="base-card home-subcard">
        <Link to="/catalogo">
          <div className="btn-container">
            <button className="btn btn-secondary">
              <h6>Ver Catálogo</h6>
            </button>
          </div>
        </Link>
        <p>Começe agora a navegar</p>
      </div>
    </div>
  );
}

export default Home;
