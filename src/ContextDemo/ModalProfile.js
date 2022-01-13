import React, { Component } from 'react'
import { ModelContext } from './_Context/ModelContext'

export default class ModalProfile extends Component {
    render() {
        return (
            <ModelContext.Consumer>
                {(value)=> {
                  return <div className="mt-5">
                    <div className="card text-white bg-dark" style={{ width: 250 }}>
                        <img style={{ width: 250, height: 300 }} className="card-img-top" src="https://vcdn-ngoisao.vnecdn.net/2021/12/05/mat-moc-thuy-tien-miss-grand-1-2922-1638681040.jpg" alt={123} />
                        <div className="card-body">
                            <h4 className="card-title">Name: Thuy Tien</h4>
                            <p className="card-text">Age: 18</p>
                            <span style={{ color: 'pink' }}>{value.stateLike} <i className="fa fa-thumbs-up"></i> ({this.props.like})</span>
                        </div>
                    </div>
                </div>
                }}
            </ModelContext.Consumer>
        )
    }
}
