import React from 'react'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import routes from '@/routes'
import '@/style/layout.less'

const DefaultLayout = props => {
  let routesMap = routes;
  return (
    <div className='app'>
      <Switch>
        {routesMap.map(item => {
          return (
            <Route
              key={item.path}
              path={item.path}
              exact={item.exact}
              render={props =><item.component {...props} />}/>
          )
        })}
        <Redirect to='/404'/>
      </Switch>
    </div>
  )
};
export default withRouter(DefaultLayout)
