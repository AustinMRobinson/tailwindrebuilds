import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css' // <- change './index.css' to './styles.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AnimatePresence } from "framer-motion"

ReactDOM.render(
    <AnimatePresence exitBeforeEnter>
      <App />,
    </AnimatePresence>,
  document.getElementById('root')
);

serviceWorker.unregister();