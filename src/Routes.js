
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Colors from "./Colors";
import NewColor from "./NewColor";
import FilterColorDetails from './FilterColorDetails';

function Routes({colors, addColor}) {
  return (
    <div className="Routes">
   <Switch>
      <Route exact path="/colors">
      <Colors colors={colors}/>
      </Route>
      <Route exact path="/colors/new">
        <NewColor addColor={addColor}/>
      </Route>
      <Route path="/colors/:color">
      <FilterColorDetails colors={colors}/>
      </Route>
      <Redirect to="/colors" />
    </Switch>
    </div>
  );
}

export default Routes;
