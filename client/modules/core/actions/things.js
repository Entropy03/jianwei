export default {
  create({Meteor, LocalState, FlowRouter}, title, content ,category,sceneId,type,pid) {

    if (!title || !content) {
      console.log("message");

      return LocalState.set('SAVING_ERROR', 'Title & Content are required!');
    }
    LocalState.set('SAVING_ERROR', null);

    const id = Meteor.uuid();
    // There is a method stub for this in the config/method_stubs
    // That's how we are doing latency compensation
    Meteor.call('things.create', id, title, content,category, sceneId,type,pid,(err) => {
      if (err) {
        console.log(err.message);

        return LocalState.set('SAVING_ERROR', err.message);
      }
    });
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};
