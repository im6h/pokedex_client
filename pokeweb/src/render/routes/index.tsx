import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from 'src/render/components/navbar'
import Home from 'src/render/pages/Home'
import Pokemon from 'src/render/pages/Pokemon'
import Generation from 'src/render/pages/Generation'

const Router: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemon" component={Pokemon} />
          <Route exact path="/generation" component={Generation} />
          <Route exact path="/generation/:id" component={Generation} />
        </Switch>
      </BrowserRouter>
    </>
  )
}
export default Router
