import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'
import Login from '@/components/Login'

import BloghelmetIndex from '@/components/Blogshelmet/Index'
import BloghelmetCreate from '@/components/Blogshelmet/CreateBloghelmet'
import BloghelmetEdit from '@/components/Blogshelmet/EditBloghelmet'
import BloghelmetShow from '@/components/Blogshelmet/ShowBloghelmet'
import CommentIndex from '@/components/Comments/Index'

import Upload from '@/components/Utils/Upload'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/blogshelmet',
      name: 'blogshelmet',
      component: BloghelmetIndex
    },
    {
      path: '/bloghelmet/create',
      name: 'bloghelmet-create',
      component: BloghelmetCreate
    },{
      path: '/bloghelmet/edit/:bloghelmetId',
      name: 'bloghelmet-edit',
      component: BloghelmetEdit
    },
    {
      path: '/bloghelmet/:bloghelmetId',
      name: 'bloghelmet',
      component: BloghelmetShow
    },


    
    {
      path: '/comments',
      name: 'comments',
      component: CommentIndex
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    }
  ]
})
