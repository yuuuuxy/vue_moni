import Login from './pages/Login.vue'
import Home from './pages/404.vue'
import HelloW from './components/HelloWorld.vue'

const Foo = { template: '<div>foo</div>' }
const routes = [
  { path: '/foo', component: Foo },//缺少一个/
  { path: '/login', component: Login },//缺少一个/
  { path: '/home', component: Home },
  { path: '/hw', component: HelloW },
]
export default routes