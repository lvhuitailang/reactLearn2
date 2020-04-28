import React, {Component} from 'react';
import ToDoItem from "./ToDoItem";

import PropTypes from 'prop-types';

class ToDoList extends Component {

    static propTypes={
        toDoList: PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.number.isRequired,
            title:PropTypes.string.isRequired,
            completed:PropTypes.bool.isRequired
        })).isRequired,
        completeChange:PropTypes.func
    }

    render() {
        return (
            <ul>
                {
                    this.props.toDoList.map(item=>{
                        return  <ToDoItem
                            key={item.id}
                            completeChange = {this.props.completeChange}
                            // 这里如果直接传递item，而不是展开，就会导致子组件里面shouldComponentUpdate里面的当前状态错误
                            {...item}

                        />
                    })
                }
            </ul>
        );
    }
}

export default ToDoList;