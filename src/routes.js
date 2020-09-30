import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Help from './components/Help'
import QuestionSub from './components/QuestionSub'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/sign-up',
            name: 'Sign up',
            component: SignUp
        },
        {
            path: '/sign-in',
            name: 'Sign in',
            component: SignIn
        },
        {
            path: '/help',
            name: 'Help',
            component: Help
        },
        {
            path: '/question-submission',
            name: 'Question submission',
            component: QuestionSub
        }
    ]
})