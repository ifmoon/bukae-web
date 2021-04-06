import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';
import Splash from '../pages/Splash';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayout>
          <Route path="/" component={Splash} />
        </DefaultLayout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
