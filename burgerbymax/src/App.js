
import './App.css';
import Layout from "./components/Layout/layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
function App() {
  return (
    <div >
    <Layout>
      <BurgerBuilder/>
    </Layout>
    </div>
  );
}

export default App;
