import React from 'react'

export default function ChildFunctional(props) {
    //Muon khai bao mot bien lay tu object co the dung boc tach phan tu Destructuring
    let {src,name,price} = props.productItem

    return (
        <div>
            <img style={{width:150}} src={src} alt='' />
                <div style={{width:125}} className="card text-left">
                    <img className="card-img-top" src={src} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">Body</p>
                        <p className="card-text">{price}</p>
                    </div>
                </div>
        </div>
    )
}
