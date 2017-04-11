import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout';
import Home from './components/home';

import PostList from './containers/postlist';
import Post from './containers/post';
import NewPost from './containers/newpost';
import ThingList from './containers/thinglist';
import Scene from './containers/scene';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  const HomeCtx = injectDeps(Home);

  FlowRouter.route('/', {
    name: 'posts.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PostList />)
      });
    }
  });
  FlowRouter.route('/home', {
    name: 'tings.list',
    action() {
      mount(HomeCtx, {
        sceneList:()=>(<Scene/>),
        content: () => (<ThingList/>)
      });
    }
  });
  FlowRouter.route('/post/:postId', {
    name: 'posts.single',
    action({postId}) {
      mount(MainLayoutCtx, {
        content: () => (<Post postId={postId}/>),
      });
    }
  });

  FlowRouter.route('/new-post', {
    name: 'newpost',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewPost/>)
      });
    }
  });
}
