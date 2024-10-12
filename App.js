import React from 'react';  
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import HomePage from './pages/HomePage';  
// 其他导入...  
  
function App() {  
  return (  
    <Router>  
      <Switch>  
        <Route exact path="/" component={HomePage} />  
        // 其他路由...  
      </Switch>  
    </Router>  
  );  
}  
  
export default App;