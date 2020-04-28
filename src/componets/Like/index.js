import React, {Component} from 'react';

class Like extends Component {
    constructor() {
        super();
        this.state={
            liked:false
        }
    }

    handleClick = (e)=>{
        this.setState((preState,preProps)=>{
            //这个方法是异步的
            return {
                liked:!this.state.liked
            }
        },()=>{
            //由于setState是异步的，所以要获取最新的sate就需要这个方法里面来获取
            // console.log(this.state.liked)
        });
        // console.log(this.state.liked)//这里获取到的是更改之前的状态
    }

    render() {
        return (
            <div>
                <span onClick={this.handleClick}>
                    {this.state.liked?'喜欢☺️':'讨厌😢'}
                </span>
                
            </div>
        );
    }
}

export default Like;