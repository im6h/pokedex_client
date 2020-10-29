import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from 'src/render/components/navbar'
// import Home from 'src/render/pages/Home'
import Pokemon from 'src/render/pages/Pokemon'
import Generation from 'src/render/pages/Generation'
import Move from 'src/render/pages/Move'
import Ability from 'src/render/pages/Ability'
import Type from 'src/render/pages/Type'
import Detail from 'src/render/pages/Pokemon/Detail'

const Router: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Generation} />
          <Route exact path="/generation/:id/pokemon" component={Pokemon} />
          <Route exact path="/generation/:id/move" component={Move} />
          <Route exact path="/generation/:id/ability" component={Ability} />
          <Route exact path="/generation/:id/type" component={Type} />
          <Route exact path="/pokemon/:id" component={Detail} />
        </Switch>
      </BrowserRouter>
    </>
  )
}
export default Router
