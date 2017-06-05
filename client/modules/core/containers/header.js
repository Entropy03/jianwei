import Header from '../components/header';

import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('scenes.userScenes').ready()) {
    const scenes = Collections.Scenes.find();
    onData(null, {scenes});
  } else {
    const scenes = Collections.Scenes.find();
    if (scenes) {
      onData(null, {scenes});
    } else {
      onData();
    }
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Header);
