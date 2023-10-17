import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ListAssetComponent from './component/asset/ListAssetComponent';
import AddAssetComponent from './component/asset/AddAssetComponent';
import EditAssetComponent from './component/asset/EditAssetComponent';

function App() {
  return (
      <div className="container">
          <Router>
              <div className="col-md-6">
                  <h1 className="text-center" style={style}>React Asset Application</h1>
                  <Switch>
                      <Route path="/" exact component={ListAssetComponent} />
                      <Route path="/assets" component={ListAssetComponent} />
                      <Route path="/add-asset" component={AddAssetComponent} />
                      <Route path="/edit-asset" component={EditAssetComponent} />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
