import React, { Component } from 'react'
import { ExModelListContext } from '../_Context/ExModelListContext'
import ExContextModelList from './ExContextModelList'
import ModelItem from './ModelItem'

export default class ModelList extends Component {
    render() {
        return (
            <ExModelListContext.Consumer>
                {(value) => {
                    return <div>
                        <h3>List Idol</h3>
                        <div className="row">
                            {value.modelListState.map((model,index)=>{
                                return <div className="col-3" key={index}>
                                    <ModelItem modelItem = {model}/>
                                </div>
                            })}
                        </div>
                    </div>
                }}

            </ExModelListContext.Consumer>
        )
    }
}
