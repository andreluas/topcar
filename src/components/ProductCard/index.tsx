import './styles.scss';
import ImageCar from 'assets/images/catalog-car.png';

function ProductCard() {
  return (
    <div className="product-card-container">
      <div className="product-card-content">
        <div className="product-image-container">
          <img src={ImageCar} alt="Imagem do produto" />
        </div>
        <div className="product-text-container">
          <h4>Audi Supra TT</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
        </div>
        <div className="product-card-btn-container">
          <button>Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
