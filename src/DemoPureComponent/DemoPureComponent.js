import React, { Component } from 'react'
import Profile from './Profile'

export default class DemoPureComponent extends Component {

    state = {
       like: 0
    }
 
    likeImage = () => {
        let likeHienTai = this.state.like + 1;
        this.setState({
           like:likeHienTai
        })
    }
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Profile Huynh Thuc Thuy Tien</h3>
                <Profile like={this.state.like}/>
                <br/>
                <div className="card text-white bg-success">
                    <h3>Danh Gia ({this.state.like})</h3>
                    <div className="card-body">
                        <button className="btn btn-danger" onClick={() => {
                            this.likeImage()
                        }}>Like <i className="fa fa-thumbs-up"></i></button>
                    </div>
                </div>

            </div>
        )
    }
}

