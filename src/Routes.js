
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Colors from "./Colors";
import Color from "./Color";
import FilterColorDetails from './FilterColorDetails';

function Routes({colors}) {
  return (
    <div className="Routes">
   <Switch>
      <Route exact path="/colors">
      <Colors colors={colors}/>
      </Route>
      <Route path="/colors/:color">
        <Color />
      </Route>
      <Route exact path="/colors/new">
        <FilterColorDetails colors={colors}/>
      </Route>
      <Redirect to="/colors" />
    </Switch>
    </div>
  );
}

export default Routes;
