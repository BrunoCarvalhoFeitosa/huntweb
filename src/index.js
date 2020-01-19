import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM will be initialized only once in the application
ReactDOM.render(<App />, document.querySelector('#root'));
serviceWorker.unregister();
