import React from 'react';
import './App.css';
import GithubProfileSearchApp from './components/Github/GithubProfileSearchApp';




let App=()=>{
  return(
    <React.Fragment>
    <div className="amit near-moon-gradient">
    <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <h1><span className="navbar-brand mb-0">GitHub Profile Search</span></h1>
  </div>
</nav>
    

    <GithubProfileSearchApp/>
    </div>
    
     </React.Fragment>
  )
}

export default App;
