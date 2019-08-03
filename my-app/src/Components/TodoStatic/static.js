import React from 'react';

function StaticList(props) {
    return (
        <div className="list-items">
            <p>Description: {props.description} / Deadline: {props.deadline}</p>
        </div>
    )
}
export default StaticList;