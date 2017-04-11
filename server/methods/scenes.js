import {Scenes, Comments} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'scenes.create'(_id, title, content) {
      check(_id, String);
      check(title, String);
      check(content, String);

      // Demo the latency compensations (Delete this in production)

      const createdAt = new Date();
      const scenes = {_id, title, content, createdAt};
      Scenes.insert(scenes);
    }
  });
}
