import React, {Component,createRef} from 'react';

import PropTypes from 'prop-types';

class ToDoInput extends Component {

    constructor() {
        super();
        this.state = {
            btnText:'sub',
            inputValue:''
        }
        this.inputDom = createRef();
    }

    static propTypes = {
        children:PropTypes.object.isRequired

    }
    handleInput = (e)=>{
        let v = e.currentTarget.value;
        this.setState(()=>{
            return {
                inputValue:v
            }
        });
    }
    handleAddClick = ()=>{
        if(!this.state.inputValue || this.state.inputValue.trim()===''){
            this.inputDom.current.focus();
            return;
        }
        this.props.addToDo(this.state.inputValue.trim())
        this.setState(()=>{
            return{
                inputValue: ''
            }
        },()=>{
            this.inputDom.current.focus();
        })

    }

    handleKeyUp = (e)=>{
        if(e.keyCode && e.keyCode === 13){
            this.handleAddClick();
        }

    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={this.inputDom}
                    value={this.state.inputValue}
                    onChange={this.handleInput}
                    onKeyUp={this.handleKeyUp}
                />
                <button type={'button'} onClick={this.handleAddClick}>{this.props.children.btnText}</button>
            </div>
        );
    }
}

export default ToDoInput;