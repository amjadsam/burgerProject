
import './App.css';
import {Route,Switch} from "react-router-dom";
import Container from "./container";
import Order from "./order";
function App() {
  return (
    <div className="App">
      <Switch>
    <Route path="/" exact component={Container}/>
    <Route path="/orders" exact component={Order}/>
    </Switch>
    </div>
  );
}

export default App;
