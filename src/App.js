import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Treemaker from './views/Treemaker';

function App() {
  return (
    <div className="bg-dark">
      <div className="d-flex mx-4 pt-3 justify-content-center">
        <Treemaker />
      </div>
    </div>
  );
}

export default App;
