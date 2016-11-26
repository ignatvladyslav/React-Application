import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import {
  RootPage, IndexPage, AddPage,
  RemovePage, EditPage, SearchPage, FilterPage
} from 'routes';

export default ({history}) => (
  <Router history={history}>
    <Route path="https://ignatvladyslav.github.io/React-Application/" component={RootPage}>
      <IndexRoute component={IndexPage} />
      <Route path="edit" component={EditPage} />
      <Route path="add" component={AddPage} />
      <Route path="remove" component={RemovePage} />
      <Route path="search" component={SearchPage} />
      <Route path="filter" component={FilterPage} />

    </Route>
    <Route path="*" component={() => <div>404!<br /><a href="https://ignatvladyslav.github.io/React-Application/">go home</a></div>} />
  </Router>
);
