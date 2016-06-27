import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    }
  }
});

// For each key in the params, 
// if it is NOT undefined,
// take the rental and set the property that matches the current key, to the value of the current key,
// after looping through all of the keys, save the rental,
// transition to the index route.
