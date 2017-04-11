import {Scenes,Posts} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('scenes.userScenes', function () {
    return Scenes.find();
  });
}
