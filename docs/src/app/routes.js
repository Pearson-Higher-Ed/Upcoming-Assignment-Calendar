import React from 'react';
import { Route } from 'react-router';

import Root from './components/containers/Root';

import Components from './components/containers/Components';
import Calendar from './components/containers/components/SimpleCalendar';

const Routes = (
  <Route path="/" component={Root}>
    <Route path="components" component={Components}>
      <Route path="calendar" component={Calendar} />
    </Route>
  </Route>
);

export default Routes;
