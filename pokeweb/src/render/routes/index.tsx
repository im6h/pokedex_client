import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from 'src/render/components/navbar'
import Home from 'src/render/pages/Home'
import Pokemon from 'src/render/pages/Pokemon'

const Router: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemon" component={Home} />
          <Route exact path="/pokemon/:id" component={Pokemon} />
        </Switch>
      </BrowserRouter>
    </>
  )
}
export default Router
