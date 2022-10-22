/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
            path: '/',
            name: 'List',
            component: () => import('../components/ListMy')
        },
        {
            path: '/create',
            name: 'Create',
            component: () => import('../components/CreateMy')
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: () => import('../components/EditMy')
        }
]

const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes
})

export default router
 