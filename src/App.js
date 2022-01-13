import React, { Component } from 'react'
import BaiTapBurger from './Props/BaiTapBurger/BaiTapBurger'
// import ContextDemo from './ContextDemo/ContextDemo'
// import ExContextModelList from './ContextDemo/ExContextModelList/ExContextModelList'
// import BaiTapBookingTicket from './BaiTapRedux/BaiTapBookingTicket/BaiTapBookingTicket'
// import DemoPureComponent from './DemoPureComponent/DemoPureComponent'
// import BaiTapOanTuXi from './BaiTapRedux/BaiTapOanTuXi/BaiTapOanTuXi'
// import BaiTapGioHangRedux from './BaiTapGioHangRedux/BaiTapGioHangRedux'
// import BaiTapGameXucXac from './BaiTapRedux/BaiTapGameXucXac'
// import DemoProps from './Props/DemoProps'
// import ProductList from './Props/ProductList'
// import dataJson from './Data/data.json'
// import DanhSachSanPham from './Props/DanhSachSanPham'





export default class App extends Component {
  render() {
    return (
        <div>
          {/* <DanhSachSanPham/> */}
          {/* <BaiTapGioHangRedux/> */}
          {/* <BaiTapGameXucXac/> */}
          {/* <BaiTapOanTuXi/> */}
          {/* <BaiTapBookingTicket/> */}
          {/* <DemoPureComponent/> */}
          {/* <ContextDemo/> */}
          {/* <ExContextModelList/> */}
          <BaiTapBurger/>
        </div>




      // <div className="container-fluid">
      //   {/* <DemoProps/> */}
      //   <div className="row">
      //      <div className="col-4">
      //       <div className="nav flex-column nav-pills justify-content-center" style={{minHeight:800}} id="v-pills-tab" role="tablist" aria-orientation="vertical">
      //         <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
      //         <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#shop" role="tab" aria-controls="v-pills-Shop" aria-selected="false">Shop</a>
      //       </div>
      //      </div>
      //      <div className="productList col-8">
      //       <div className="tab-content" id="v-pills-tabContent">
      //         <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                
      //         <ProductList arrProduct={dataJson}/>

      //         </div>
      //         <div className="tab-pane fade" id="shop" role="tabpanel" aria-labelledby="v-pills-shop-tab">shop</div>
      //       </div>
      //     </div>
      //   </div>
        
      // </div>
    )
  }
}
