import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    save(params) {
      var newQuestion = this.store.createRecord('quetion', params);
      newQuestion.save();
      this.transitionTo('index');
    },
  }
});
