import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home/Home";
import store from "./redux/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ScrollToTopBtn from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <ScrollToTopBtn />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
