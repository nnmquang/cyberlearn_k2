import React, { Component } from 'react'
import Child from './Child'
import ChildFunctional from './ChildFunctional';

// export default class Parent extends Component {

//     src= "https://assets.adidas.com/images/w_600,f_auto,q_auto/c7227d99699243099c24ac5e00406c2c_9366/Giay_co_lung_Forum_trang_FY4976_01_standard.jpg";
//     name = 'bitis Hunter x2'
//     render() {
//         return (
//             <div>
//                 <input type='password'/>
//                 {/* <Child propSource={this.src} name={this.name}/>
//                 <Child propSource={this.src} name={this.name}/>
//                 <Child propSource={this.src} name={this.name}/>
//                 <Child propSource={this.src} name={this.name}/> */}

//                 <ChildFunctional propSource={this.src} name={this.name} />
//             </div>
//         )
//     }
// }

export default class Parent extends Component {

    product = {
        id: 1,
        src : "https://assets.adidas.com/images/w_600,f_auto,q_auto/c7227d99699243099c24ac5e00406c2c_9366/Giay_co_lung_Forum_trang_FY4976_01_standard.jpg",
        desc : 'Giay viet nam chat luong em await, nang niu ban chan viet',
        price : 1000,
        name : 'bitis Hunter x2',
        size : [36,37,38,39,40]
    }

    size = [36,37,38,39,40]    //truyen qua mang

    showInfo = (name) =>{      //truyen function
        alert(name)
    };

    render() {
        return (
            <div>
                <input type='password'/>
                

                {/* <ChildFunctional productItem={this.product} /> */}
                <Child showAlert={this.showInfo} productItem={this.product} shoesSize={this.size}/>
            </div>
        )
    }
}

