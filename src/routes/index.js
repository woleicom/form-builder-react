import loadable from '@/utils/loadable'

const Index = loadable(() => import(/* webpackChunkName: 'index' */ '@/views/Index'))


// const Test1 = loadable(() => import('@/views/Test/Test1'))
const routes = [
    { path: '/index', exact: true, name: 'Index', component: Index },
    // { path: '/test/test1', exact: true, name: 'Test1', component: Test1 }
]

export default routes
