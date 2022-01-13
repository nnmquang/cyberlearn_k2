import React, { Component, PureComponent } from 'react'

export default class Profile extends PureComponent {
    render() {
        console.log('load')
        return (
            <div>
                <div className="card text-white bg-dark" style={{width:250}}>
                    <img style={{width:250,height:300}} className="card-img-top" src="https://vcdn-ngoisao.vnecdn.net/2021/12/05/mat-moc-thuy-tien-miss-grand-1-2922-1638681040.jpg" alt={123} />
                    <div className="card-body">
                        <h3>So luot like: <i className="fa fa-thumbs-up"></i> ({this.props.like})</h3>
                        <h4 className="card-title">Name: Thuy Tien</h4>
                        <p className="card-text">Age: 18</p>
                    </div>
                </div>

            </div>
        ) 
    }
}
