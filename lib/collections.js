import {Mongo} from 'meteor/mongo';

export const Posts = new Mongo.Collection('posts');
export const Comments = new Mongo.Collection('comments');
export const Scenes = new Mongo.Collection('scenes');
export const Things = new Mongo.Collection('things');
