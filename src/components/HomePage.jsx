import React, { useState, useEffect } from 'react';
import './HomePage.css'
import { getProductsIds, getNameAndPriceWithProductId, getImageForHomePageWithProductId, getAPIURL } from './connections/fastapicon';

function HomePage() {
  const backgroundImageURL = "https://previews.123rf.com/images/realfantasyart/realfantasyart2303/realfantasyart230301799/201791081-familia-de-robots-ecol%C3%B3gicos-en-el-suelo-concepto-de-tecnolog%C3%ADa-y-conservaci%C3%B3n-del-medio-ambiente.jpg"
  const [itemsIds, setItemsIds] = useState([]);
  const [names, setNames] = useState([]);
  const [prices, setPrices] = useState([]);
  const [imagesIds, setImagesIds] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const responseItemsIds = await getProductsIds();
        const productIds = responseItemsIds.data.map((product) => product.id);
        setItemsIds(productIds);
        setNumberOfItems(productIds.length);
        const fetchNamesAndPrices = async (itemId) => {
          const nameAndPrice = await getNameAndPriceWithProductId(itemId);
          return nameAndPrice;
        }

        // Use Promise.all to fetch names and prices for all items
        const nameAndPricePromises = productIds.map(fetchNamesAndPrices);
        const nameAndPriceData = await Promise.all(nameAndPricePromises);

        const namesArray = nameAndPriceData.map((item) => item.data);
        const pricesArray = nameAndPriceData.map((item) => item.data);

        setNames(namesArray.map((pos) => pos[0].name));
        setPrices(pricesArray.map((pos) => pos[0].price));

        const fetchImagesIds = async (itemId) => {
          const imageId = await getImageForHomePageWithProductId(itemId);
          return imageId
        }

        const imagesIdsPromises = productIds.map(fetchImagesIds);
        const imagesIds = await Promise.all(imagesIdsPromises);

        setImagesIds(imagesIds.map((pos) => pos));

      } catch (err) {
        console.log(err);
        // Handle errors as needed
      }
    }

    fetchData();
  }, []);
  console.log(itemsIds);
  console.log(names);
  console.log(prices);
  console.log(imagesIds);
  console.log(numberOfItems);
  return (
    <>
      <div className="grid-container-revelant">
        <div className="one"
          style={{
            backgroundImage: `url(${getAPIURL()}/get_image/?img_id=1orh5sYorcM8a1Lf1epkSbCuOvdPjVGyO)`, // Set the background image
            backgroundSize: 'cover', // or 'contain' based on your preference
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', // Center the background image
          }}></div>
        <div className="two"
          style={{
            backgroundImage: `url(${getAPIURL()}/get_image/?img_id=1M1eCagXy0p6qyhh-TEfInYvnav0OUBd3)`, // Set the background image
            backgroundSize: 'cover', // or 'contain' based on your preference
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', // Center the background image
          }}></div>
        <div className="three"
          style={{
            backgroundImage: `url(${getAPIURL()}/get_image/?img_id=1VYpmu0gJSAGPBLmQWQrTrzuslmaJRGT2)`, // Set the background image
            backgroundSize: 'cover', // or 'contain' based on your preference
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', // Center the background image
          }}></div>
        <div className="four"
          style={{
            backgroundImage: `url(${getAPIURL()}/get_image/?img_id=19v0VwnjEQzKNbc-LpePET-IyRsI4UjIy)`, // Set the background image
            backgroundSize: 'cover', // or 'contain' based on your preference
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', // Center the background image
          }}></div>
        <div className="five"
          style={{
            backgroundImage: `url(${getAPIURL()}/get_image/?img_id=1Juo2h6Is_jT8MIAh5aAlGAYu2taGXkQL)`, // Set the background image
            backgroundSize: 'cover', // or 'contain' based on your preference
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', // Center the background image
          }}></div>
        <div className="six"
          style={{
            backgroundImage: `url(${getAPIURL()}/get_image/?img_id=1h2-xe9oooNFjGuofutJBNL8umBs2iR_1)`, // Set the background image
            backgroundSize: 'cover', // or 'contain' based on your preference
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', // Center the background image
          }}></div>
        <div className="seven"
          style={{
            backgroundImage: `url(${getAPIURL()}/get_image/?img_id=151o9qfDaDZN33uvpmEuOeRFdbB6SVEqy)`, // Set the background image
            backgroundSize: 'cover', // or 'contain' based on your preference
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', // Center the background image
          }}></div>
        <div className="eigth"
          style={{
            backgroundImage: `url(${getAPIURL()}/get_image/?img_id=1puoU5cW7KMKgfuVvB_fscaUyfnq_vdU3)`, // Set the background image
            backgroundSize: 'cover', // or 'contain' based on your preference
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', // Center the background image
          }}></div>
        <div className="nine"
          style={{
            backgroundImage: `url(${getAPIURL()}/get_image/?img_id=1GU0pZ1el8t4r43G4Bf56ggFG5WNr7YUK)`, // Set the background image
            backgroundSize: 'cover', // or 'contain' based on your preference
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', // Center the background image
          }}></div>
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
        {Array.from({ length: numberOfItems }, (_, index) => index).map((i) => (
          <div
            onMouseOver={() => {
              const element = document.getElementById(`grid-item-hover-${itemsIds[i]}`);
              if (element) {
                element.style.overflow = 'hidden';
                element.style.height = '26px';
                element.style.transition = '.5s ease';
              }
            }}
            onMouseOut={() => {
              const element = document.getElementById(`grid-item-hover-${itemsIds[i]}`);
              if (element) {
                element.style.overflow = 'hidden';
                element.style.height = '0px';
                element.style.transition = '.5s ease';
              }
            }}
            className="grid-items"
            key={itemsIds[i]}
            style={{
              backgroundImage: `url(${getAPIURL()}/get_image/?img_id=${imagesIds[i]})`, // Set the background image
              backgroundSize: '65%', // or 'contain' based on your preference
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center', // Center the background image
            }}
          >
            {/* <span>{itemsIds[i]}</span> */}
            <div className="grid-item-price">COP {prices[i]}</div>
            <div
              style={{
                background: '#FA6C19',
                gridColumn: '1 / 7',
                gridRow: '7',
                overflow: 'hidden',
                height: '0px',
                paddingLeft: '12px',
                paddingUp: '19px',
              }}
              id={`grid-item-hover-${itemsIds[i]}`}
            >
              {"    "} {names[i]}
            </div>
          </div>
        ))}
      </div>

    </>
  );
}

export default HomePage;
