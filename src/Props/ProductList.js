import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    renderProductItem = () => {
        return this.props.arrProduct.map((item, index) => {
            return <div className="col-4 mt-3 w3-container w3-center w3-animate-zoom" key={index}>
                {/* <div className="card text-left" style={{width:300}}>
                    <img className="card-img-top" src={item.image} alt={item.image} />
                    <div className="card-body">
                        <h4 style={{fontSize:18}} className="card-title">{item.name}</h4>
                        <p className="card-text">{item.price}</p>
                        <button className="text-white w3-button w3-black">Add to cart <i class="fa fa-cart-arrow-down"></i></button>
                    </div>
                </div> */}
                <ProductItem dataProductItem={item}/>

            </div>

        })
    }



    render() {
        console.log("data", this.props.arrProduct)
        return (
            <div className="row">
                {this.renderProductItem()}
            </div>
        )
    }
}

