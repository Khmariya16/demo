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
                        <h5>{phone.brand}</h5>
                        <h3>{phone.model}</h3>
                        <h4>{phone.price}</h4>
                    </div>
                    <div className="card-footer">
                        <button className='btn btn-primary'>buy Now</button>
                        <button className='btn btn-success ms-1'>Add to cart</button>
                    </div>
                </div>
            </div>
        })

    }
        const searchProduct = (e) =>
        {
            const search = e.target.value
            setProductData (
                smartphone.filter((phone) => {return phone.brand.toLowerCase().includes(search.toLowerCase())})
            );
                
    }

  return (
    <div className='list-back'>
        <header className='bg-body-secondary'>
            <div className="container py-5">
                <h1 className="text-center">Product lIst</h1>
                <input onChange={searchProduct} type="text" className='form-control form-control-lg' placeholder='search..' />
                
            </div>
        </header>
        <div className="container">
            <div className="row">{displayProducts()}</div></div>
    </div>
  )
}

export default ProductList