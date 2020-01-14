import React from 'react';
import { Router, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import history from '../history';
import Layout from './Layout';
import Home from './Home';
import MarkdownDetail from './MarkdownDetail';
import MarkdownCreate from './MarkdownCreate';
import MarkdownEdit from './MarkdownEdit';

const NotDefined = () => <h1>404 Not Defined</h1>;

export default () => {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/article/create" component={MarkdownCreate} />
          <Route exact path="/article/:id" component={MarkdownDetail} />
          <Route exact path="/article/:id/edit" component={MarkdownEdit} />
          <Route component={NotDefined} />
        </Switch>
      </Layout>
    </Router>
  );
};
