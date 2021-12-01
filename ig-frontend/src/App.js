import React from 'react'
import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Create from './pages/Create'
import SinglePost from './pages/SinglePost'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
function App() {
    return (
      <div className="App">
        <BrowserRouter>
        <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create" exact component={Create} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/:id" exact component={SinglePost} />
          </Switch>
        </BrowserRouter>
      </div>
    )
}

export default App;
