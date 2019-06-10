// import React from 'react';
// import './App.css';
// import routes from './routes'

// function App() {
//   return (
//    {routes}
//   );
// }

// export default App;

import React, { Component } from 'react';
import './App.css';
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        {routes}

      </div>
    );
  }
}

export default App;