import React, {Component} from 'react';

const noop = ()=>{};

class ToDoItem extends Component{
    constructor() {
        super();
        this.state = {
            completeText : ''
        }
    }

    handleCheckBox = ()=>{
        let {
            completeChange = noop,
            id
        } = this.props;
        completeChange(id);
    }

    handleLiClick = ()=>{
        // console.log(222)
        // this.handleCheckBox();
        // this.props.completeChange && this.props.completeChange(this.props.item.id);
    }

    static getDerivedStateFromProps(props){
        return {
            completeText:props.completed?'完成':'未完成'
        }

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
/*        console.log(this.props.item)
        console.log(nextProps.item)
        console.log('===================')
        return false;*/
        return nextProps.completed !== this.props.completed;
    }

    render() {
        console.log(this.props.title)
        return (
            <li  >
                <input
                    type={'checkbox'}
                    checked={this.props.completed}
                    onChange={this.handleCheckBox}
                />
                <span>{this.props.title}---{this.state.completeText}</span>
            </li>

        )
    }


}
export default ToDoItem;
