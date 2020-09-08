import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import loadable from './utils/loadable';
import './style/base.less'
import './style/App.less'


// 公共模块
const DefaultLayout = loadable(() => import('./layout'));

// 基础页面
const View404 = loadable(() => import(/* webpackChunkName: '404' */'./views/Others/404'));

class App extends Component {
  render() {
    console.log(process.env);
    return (
      <Router>
        <Switch>
          <Route path='/' exact render={() => <Redirect to='/index' />} />
          <Route path='/404' component={View404} />
          <Route component={DefaultLayout} />
        </Switch>
      </Router>
    )
  }
};
export default App
