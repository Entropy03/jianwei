import {Things,Posts} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('things.list', function () {
    return Things.find();
  });
}
