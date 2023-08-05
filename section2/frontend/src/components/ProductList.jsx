import React, { useState } from 'react'
import smartphone from './dummydata'

const ProductList = () => {

    const [productData, setProductData] = useState(smartphone);

    const displayProducts = () => {
        return productData.map((phone) => {
           return <div className="col-md-3 mt-5">
                <div className="card">
                    <img src={phone.image} alt="" className='card-img-top' />
                    <div className="card-body">
                        <h3>{phone.brand}</h3>
                        <h3>{phone.model}</h3>
                        <h3>{phone.price}</h3>
                    </div>
                </div>
            </div>
        })
    }
  return (
    <div>
        <div className="container">
            <div className="row">{displayProducts()}</div></div>
    </div>
  )
}

export default ProductList