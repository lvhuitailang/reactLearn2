import React, {Component} from 'react';

import PropTypes from 'prop-types'; // ES6

let ToDoHeader = (props)=>{
    return (
        <div>
            <h1>
                <i>
                    {props.children.title}
                </i>
            </h1>
            <p>{props.desc}</p>
        </div>
    )
}

export default ToDoHeader;

ToDoHeader.propTypes={
    desc:PropTypes.string.isRequired,
    children:PropTypes.object.isRequired

}
ToDoHeader.defaultProps={
    desc:'如果还有明天'
}