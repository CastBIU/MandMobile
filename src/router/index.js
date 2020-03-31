import Vue from 'vue'
import VueRouter from 'vue-router'
// import VuePdf from '@/views/VuePdf'
import PdfjsDist from '@/views/PdfjsDist'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: PdfjsDist,
    }
]

const router = new VueRouter({
    routes,
})

export default router