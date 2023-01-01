import React from 'react';
import { BrowserRouter as  Route, Routes} from 'react-router-dom';
import Home from '../src/pages/Home';
import Index from '../src/pages/Index';
import NotFound from '../src/pages/NotFound';

function AppRoutes() {
  return (
    
      <Routes>
      <Route exact path="/" component={Index} />
      <Route path="/home" component={Home} />
      <Route component={NotFound} />
      </Routes>
    
  );
}

export default AppRoutes;
