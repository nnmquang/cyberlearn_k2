import React, { Component } from 'react'
import LikeProfile from './LikeProfile'
import ModalProfile from './ModalProfile'
import ModelStateProvider from './_Provider/ModelStateProvider'

export default class ContextDemo extends Component {
    render() {
        return (
            <ModelStateProvider>
                <div>
                    <ModalProfile />
                    <LikeProfile />
                </div>
            </ModelStateProvider>
        )
    }
}
