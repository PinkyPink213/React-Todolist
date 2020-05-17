import React from 'react';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-4 bg-warning">Hello</div>
          <div className="col-4 bg-danger">Hello</div>
          <div className="col-4 bg-primary">Hello</div>
        </div>
      </div>
    </div>
  );
}

export default App;
