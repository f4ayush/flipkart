import React from "react";
import "./product.css"

export default function Product({ setshowProduct, product }) {
  const handleCancel = () => {
    setshowProduct(false);
  };

  const buyNow = () => {
    alert("Congratulations! You just bought a product")
  }
  return (
    <div className="product">
      <div className="left">
        <img src={product.image} alt="" />
      </div>
      <div className="right">
        <p className="product-name">{product.name}</p>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price}</p>
        <button className="buy-button product-button" onClick={buyNow}>Buy now</button>
        <button className="buy-button product-button" onClick={handleCancel}>Cancel</button>
      </div>
      {/* new */}
      <div class="single-product col-xl-3 col-lg-4 col-md-6">
											<div class="product-img">
												<span class="pro-label new-label">new</span>
												<a href="single-product.html"><img src="img/product/5.jpg" alt="" /></a>
												<div class="product-action clearfix">
													<a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i class="zmdi zmdi-favorite-outline"></i></a>
													<a href="#" data-bs-toggle="modal"  data-bs-target="#productModal" title="Quick View"><i class="zmdi zmdi-zoom-in"></i></a>
													<a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i class="zmdi zmdi-refresh"></i></a>
													<a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="zmdi zmdi-shopping-cart-plus"></i></a>
												</div>
											</div>
											<div class="product-info clearfix">
												<div class="fix">
													<h4 class="post-title floatleft"><a href="#">dummy Product name</a></h4>
													<p class="floatright hidden-sm">Furniture</p>
												</div>
												<div class="fix">
													<span class="pro-price floatleft">$ 56.20</span>
													<span class="pro-rating floatright">
														<a href="#"><i class="zmdi zmdi-star"></i></a>
														<a href="#"><i class="zmdi zmdi-star"></i></a>
														<a href="#"><i class="zmdi zmdi-star"></i></a>
														<a href="#"><i class="zmdi zmdi-star-half"></i></a>
														<a href="#"><i class="zmdi zmdi-star-half"></i></a>
													</span>
												</div>
											</div>
										</div>
    </div>
  );
}
