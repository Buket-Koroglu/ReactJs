import '../App.css';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from '../home/Home';
import UrunDetay from '../urunDetay/UrunDetay';

function App() {
  return (
    <Switch>
     <Route path="/" exact component={Dashboard}/>
     <Route path="/home" component={Home}/>
     <Route path="/urunDetay" component={UrunDetay}/>


  </Switch>
  );
}

export default App;
