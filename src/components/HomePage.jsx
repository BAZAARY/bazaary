import React from 'react';
import './HomePage.css'

function HomePage() {
  const items = Array.from({ length: 26 }, (_, index) => index + 1);
  return (
    <>
      <div className="grid-container-revelant">
        <div className="one">Relevant 1</div>
        <div className="two">Relevant 2</div>
        <div className="three">Relevant 3</div>
        <div className="four">Relevant 4</div>
        <div className="five">Relevant 5</div>
        <div className="six">Relevant 6</div>
        <div className="seven">Relevant 7</div>
        <div className="eigth">Relevant 8</div>
        <div className="nine">Relevant 9</div>
        {/* Add more grid items as needed */}
      </div>

      <div className="grid-container-categories">
        <div className="clothing">
          <button className="btn" onClick={null}>Ropa</button>
        </div>
        <div className="rent">
          <button className="btn" onClick={null}>Alquileres</button>
        </div>
        <div className="pc">
          <button className="btn" onClick={null}>PC's</button>
        </div>
        <div className="laptop">
          <button className="btn" onClick={null}>Laptops</button>
        </div>
        <div className="celphones">
          <button className="btn" onClick={null}>Celulares</button>
        </div>
        <div className="others">
          <button className="btn" onClick={null}>Comida</button>
        </div>
        {/* Add more grid items as needed */}
      </div>
      <div className="grid-container-items">
        {items.map((item) => (
          <div className="grid-item" key={item}>
            <div>Product {item}</div>
          </div>
        ))}
      </div>

    </>
  );
}

export default HomePage;
