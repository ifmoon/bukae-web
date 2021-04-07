import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';
import Edit from '../pages/Edit';
import Splash from '../pages/Splash';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayout>
          <Route path="/" exact component={Splash} />
          <Route path="/edit/:phase" exact component={Edit} />
        </DefaultLayout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
