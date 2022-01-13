import React, { Component } from 'react'

// export default class Child extends Component {
//     render() {
//         return (
//             <div>
//                 <img style={{width:150}} src={this.props.propSource} alt='' />
//                 <div style={{width:125}} className="card text-left">
//                     <img className="card-img-top" src={this.props.propSource} alt="" />
//                     <div className="card-body">
//                         <h4 className="card-title">{this.props.name}</h4>
//                         <p className="card-text">Body</p>
//                     </div>
//                 </div>

//             </div>
//         )
//     }
// }

export default class Child extends Component {

    renderSize = () => {
        let {size} = this.props.productItem;
        return size.map((number,index)=>{
        return <button key={index}>{number}</button>
        })
    }


    render() {

        //Muon khai bao mot bien lay tu object co the dung boc tach phan tu Destructuring
        let {src,name,price,desc} = this.props.productItem;
        let {shoesSize} = this.props;
        return (
            <div>
                <img style={{width:50}} src={src} alt='' />
                <div style={{width:255}} className="card text-left">
                    <img className="card-img-top" src={src} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">Body</p>
                        <p className="card-text">{price}</p>
                        {this.renderSize()}

                        {shoesSize.map((number,index)=> {
                           return <button className="btn btn-primary" key={index}>{number}</button>
                        })}

                        <button onClick={()=>(
                            this.props.showAlert(desc)
                        )}>Detail</button>
                    </div>
                </div>

            </div>
        )
    }
}