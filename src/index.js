import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Router from './components/Router';
import createStore from "./createStore";
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import setupXhrMock from './xhrMock';
import * as serviceWorker from './serviceWorker';

setupXhrMock();

const store = createStore();

const App = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <GlobalStyle />
                <Router />
            </React.Fragment>
        </ThemeProvider>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
