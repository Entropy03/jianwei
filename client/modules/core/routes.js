import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout';
import Home from './components/home';

import PostList from './containers/postlist';
import Post from './containers/post';
import NewPost from './containers/newpost';
import ThingList from './containers/thinglist';

import ChatList from './components/chatlist';
import ThingDes from './components/thing';

import FollowList from './components/followlist';

import Scene from './containers/scene';
import Header from './containers/header';


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
    name: 'scene.list',
    action() {
      mount(HomeCtx, {
        header:()=>null,
        content:()=>(<Scene/>),
        footer:()=>null

      });
    }
  });
  FlowRouter.route('/home/:sceneId', {
    name: 'tings.list',
    action({sceneId}) {
      mount(HomeCtx, {
        header:()=>(<Header/>),
        content: () => (<ThingList sceneId={sceneId}/>),
        footer:()=>null

      });
    }
  });
  FlowRouter.route('/things/:postId', {
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
