import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ModalImage from "react-modal-image";
import { products } from '../../utilis/products';
import ShopCard from './ShopCard';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/features/cartSlice';

function ProductDetails() {
  const { link } = useParams();
  const product = products.find(p => p.link.includes(link));

  if (!product) {
    return <div>Product not found</div>;
  }

  // Filter related products based on category or any other criteria
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id);

  // add to cart logic
  const dispatch = useDispatch();

  const handleAddToCart = (event) => {
    event.preventDefault();
    const quantity = parseInt(event.target.quantity.value, 10);
    dispatch(addItem({ ...product, quantity }));
  };

  return (
    <>
      <section className='banner-section inner-baner'>
        <div className='w-layout-blockcontainer base-container w-container'>
          <div className='product-page-banner'>
            <div className="lightbox-link-main-photo w-inline-block w-lightbox">
              <ModalImage
                small={product?.images[0]}
                large={product?.images[0]}
                alt={product.name}
                className="main-product-image"
              />
            </div>
            <div>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <div className="price-wrap product-page">
                <div className="price">${product.price} USD</div>
                {product.oldPrice && <div className="old-price">${product?.oldPrice}</div>}
              </div>
              <div>
                <form onSubmit={handleAddToCart} className='w-commerce-commerceaddtocartform default-state'>
                  <div className="quantity-wrap">
                    <label htmlFor="quantity" className="field-label">Quantity</label>
                    <input id="quantity" name="quantity" type="number" pattern="^[0-9]+$" inputMode="numeric" min="1" className="w-commerce-commerceaddtocartquantityinput quantity" defaultValue="1" />
                  </div>
                  <button type="submit" className="w-commerce-commerceaddtocartbutton primary-button">Add to Cart</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section'>
        <div className='w-layout-blockcontainer base-container w-container'>
          <div className='product-info-wrapper'>
            <div className="product-text-wrap">
              <h2>Product details</h2>
              <div className="rich-text-style w-richtext">
                <p>Dimensions: 2" wide x 60 yards long</p>
                <h4 className='text-xl font-semibold mt-5'>Key Features:</h4>
                <ul role="list" className='list-disc '>
                  <li>Strong Adhesion: Provides a strong and reliable seal, keeping your boxes securely closed throughout the moving process.</li>
                  <li>Durable Material: Made from high-quality, tear-resistant material that withstands the rigors of moving and storage.</li>
                  <li>Generous Length: Each roll measures 2 inches in width and extends to 60 yards, providing ample tape for all your packing needs.</li>
                  <li>Easy Application: Smooth, noiseless unwind and easy-to-use dispenser (sold separately) make applying the tape quick and hassle-free.</li>
                  <li>Clear Finish: Transparent tape allows for easy reading of labels and box contents, ensuring you stay organized.</li>
                </ul>
                <h4 className='text-xl font-semibold mt-5'>Ideal For:</h4>
                <ul role="list" className='list-disc'>
                  <li>Sealing moving boxes</li>
                  <li>Securing bubble wrap and packing paper</li>
                  <li>Reinforcing box seams and edges</li>
                  <li>Label protection and identification</li>
                </ul>
              </div>
            </div>
            <div className="w-dyn-list w-dyn-items-repeater-ref">
              <div className="product-photos-collection-list flex gap-4" role="list">
                {product.images.slice(1).map((image, index) => (
                  <div className="w-dyn-item w-dyn-repeater-item" key={index} role="listitem">
                    <ModalImage
                      small={image}
                      large={image}
                      alt={`Product Image ${index + 1}`}
                      className="product-photos w-inline-block w-lightbox"
                    />
                  </div>
                ))}
              </div>
              <div className="empty-state w-dyn-hide w-dyn-empty">
                <div>No items found.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className='section related-products'>
          <div className='w-layout-blockcontainer base-container w-container'>
            <div className="title-wrapper"><h2>You may also like</h2><a href="/shop" className="secondary-button service-section w-button">See all</a></div>
            <div className='w-dyn-list'>
              <div className='products-collection-list w-dyn-items'>
                {relatedProducts.map((relatedProduct) => (
                  <ShopCard product={relatedProduct} key={relatedProduct.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ProductDetails;
