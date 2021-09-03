import './styles/App/App.css';
import Home from './components/Home/Home';
import InnerWidth from './components/InnerWidth/InnerWidth';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/innerWidth">
          <InnerWidth />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
