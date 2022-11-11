import Search from 'components/Search';
import ProductCard from 'components/ProductCard';
import './styles.scss';

function Catalogo() {
  return (
    <div className="catalog-container">
      <Search />
      <div className="container my-4">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-4 product-grid-container">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4 product-grid-container">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4 product-grid-container">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4 product-grid-container">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4 product-grid-container">
            <ProductCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4 product-grid-container">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalogo;
