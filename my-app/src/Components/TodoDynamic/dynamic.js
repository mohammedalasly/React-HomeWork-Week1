import React from 'react';

const todoList = [
    {
        id: 1,
        description: "Get out of bed",
        deadline: "2017-09-11",
        done: true
    },
    {
        id: 2,
        description: "Brush teeth",
        deadline: "2017-09-10",
        done: false
    },
    {
        id: 3,
        description: "Eat breakfast",
        deadline: "2017-09-09",
        done: false
    }
];

function TodoList(props) {
    return (
        <div className="list-items">
            {props.status ? <p>Description: {props.item} / Deadline: {props.deadline}</p> :
                <p style={{ textDecoration: "line-through" }}>Description: {props.item} / Deadline: {props.deadline}</p>}
        </div>
    )
}

class DynamicList extends React.Component {
    constructor() {
        super()
        this.state = {
            Dynamic: todoList
        }
    }
    render() {
        const dynamicList = this.state.Dynamic.map(item => <TodoList key={item.id} item={item.description} deadline={item.deadline} status={item.done} />);
        return (
            <div >
                <p>{dynamicList}</p>
            </div>
        )
    }
}

export default DynamicList;