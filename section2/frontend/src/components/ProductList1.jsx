import React, { useState } from 'react'
import perfume from './dummy2'

const ProductList1 = () => {
  const [perfumeData, setPerfumeData] = useState(perfume)

  const displayProducts = () => {
return perfumeData.map((perfume) => {
  return ( 
    <div className="col-md-3">
      <div className="card">
        <img src={perfume.Image} style={{height:"300px"}}alt="" />
        <div className="card-body">
          <h4>{perfume.brand}</h4>
          <h4>{perfume.price}</h4>
          
        </div>
        <div className="card-footer">
          <button className='btn btn-success'>Buy Now</button>
          <button className='btn btn-primary ms-1'>Add cart</button>
        </div>
      </div>
    </div>
  )
})
  }




  //search 

  const searchperfume = (e) => {
    const search = e.target.value;
    setPerfumeData(
      perfume.filter((phone) => {
        return phone.brand.toLowerCase().includes(search.toLowerCase());

      })
    )
  }
  return (


    <div className="list-back">
      <header className="bg-body bg-body-light">
        <div className="container mt-4">
          <h1 className='text-center display-4 mb-5'>PRODUCT LIST 1</h1>
          
          <input onChange ={searchperfume} type="text" className='form-control' placeholder='search products...'/>
        </div>
      </header>
    <div className='container-fluid'>
      <div className="row">
        <div className="col-md-3">
          <div className="card mt-4">
            <div className="card-body">
              <h3>categories</h3>
              <hr />
            </div>
          </div>
        </div>

        <div className="col-md-9">
          <div className="row mt-4">{displayProducts()}</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductList1