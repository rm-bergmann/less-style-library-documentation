import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'layout/Routes/Routes';

import './less/imports.less';

if (typeof window !== 'undefined') {
  ReactDOM.render(<Routes />, document.getElementById('app'));
}
