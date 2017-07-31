import App from '../App'

const cardList = r => require.ensure([], () => r(require('../page/cardList/index')), 'cardList')



export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        {
            path: '/cardList',
            component: cardList
        }
    ]
}]