import ThingList from '../components/thinglist.js';

import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context,sceneId}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('things.list',sceneId).ready()) {
    check(sceneId, String);
    const selector = {scenes: sceneId};
    const things = Collections.Things.find(selector);

    onData(null, {things});
  } else {
    const things = Collections.Things.find();
    if (things) {
      onData(null, {things});
    } else {
      onData();
    }
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(ThingList);
