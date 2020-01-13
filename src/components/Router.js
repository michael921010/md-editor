import React from 'react';
import { Router, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import history from '../history';
import Layout from './Layout';
import Home from './Home';
import MarkdownDetail from './MarkdownDetail';
import MarkdownCreate from './MarkdownCreate';
import MarkdownEdit from './MarkdownEdit';

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100);
//   },
// };

// const Login = withRouter(({ history }) => {
//   return (
//     <button
//       onClick={() => {
//         fakeAuth.authenticate(() => history.push('/protected'));
//       }}
//     >
//       Sign in
//     </button>
//   );
// });

// const Protected = () => <div>Protected</div>;
const NoMatch = () => <div>NoMatch</div>;

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         fakeAuth.isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: '/login',
//               state: { from: props.location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };

export default () => {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/article/create" component={MarkdownCreate} />
          <Route exact path="/article/:id" component={MarkdownDetail} />
          <Route exact path="/article/:id/edit" component={MarkdownEdit} />
          {/* <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={Protected} /> */}
          <Route component={NoMatch} />
        </Switch>
      </Layout>
    </Router>
  );
};
