import React, { Component } from 'react'
import {connect} from 'react-redux'

class Player extends Component {
    render() {
        return (
            <div className="text-center playerGame">
                <div className="theThink">
                    <img style={{transform:'rotate(120deg)'}} className="mt-2" width={80} height={80} src={this.props.mangDatCuoc.find(item=>item.datCuoc === true).hinhAnh} 
                    alt={this.props.mangDatCuoc.find(item=>item.datCuoc === true).hinhAnh}/>
                </div>
                <div className="speech-bubble"></div>
               <img style={{width:150, height:150}} src={"./img/GameOanTuXi/player.png"} alt="player.png"/>

               <div className="row">
                    {this.props.mangDatCuoc.map((item,index)=>{

                        //Xét giá trị đặt cược thêm viền cho item được chọn
                        let border = {};
                        if(item.datCuoc) {
                            border={border:'3px solid orange'}
                        }

                        return <div className="col-4">
                        <button onClick={()=>{
                            this.props.datCuoc(item.ma)
                        }} style={border} className="btnItem">
                            <img width={20} height={20} src={item.hinhAnh} alt="item.hinhAnh"/>
                        </button>
                      </div>
                    })}
                     

                    {/* <div className="col-4">
                      <button className="btnItem">
                          <img width={20} height={20} src="./img/GameOanTuXi/bao.png" alt="bao.png"/>
                      </button>
                    </div>
                    <div className="col-4">
                    <button className="btnItem">
                          <img width={20} height={20} src="./img/GameOanTuXi/bua.png" alt="bua.png"/>
                      </button>
                    </div>
                    <div className="col-4">
                    <button className="btnItem">
                          <img width={20} height={20} src="./img/GameOanTuXi/keo.png" alt="keo.png"/>
                      </button>
                    </div> */}
               </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc
    }
}

const mapDispatchToProps = dispatch => {
   return {
       datCuoc: (maCuoc) => {
           dispatch({
            type: 'CHON_KEO_BUA_BAO',
            maCuoc
           })
       }
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player)
