import {Things,Posts} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('things.list', function (sceneId) {
    check(sceneId, String);
    const selector = {scenes: sceneId};
    return Things.find(selector);
  });
}
