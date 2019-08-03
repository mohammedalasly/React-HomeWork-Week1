import React from "react";
import StaticList from "./Components/TodoStatic/static";
import DynamicList from "./Components/TodoDynamic/dynamic";
class App extends React.Component {
    render() {
      return (
        <div className="todo-list">
            <h1>Static List</h1>
          <StaticList description = "Get out of bed" deadline = "Wed Sep 13 2017" />

          <StaticList description = "Brush teeth" deadline = "Thu Sep 14 2017" />

          <StaticList description = "Eat breakfast" deadline = "Fri Sep 15 2017" />
          <hr></hr>

          <h1>Dynamic List</h1>
          <DynamicList />
        </div>
      );
    }
  }
  
  export default App;