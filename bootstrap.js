import React from 'react';
import { render } from 'react-dom';
import App from 'app.js';

render((<App counterStart={100} />), document.getElementById('appHere'));
