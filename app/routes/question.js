import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      answers: this.store.findAll('answer'),
      question: this.store.findRecord('question', params.question_id)
    });
  },
  setupController(controller, model) {
    this._super(...arguments);
    Ember.set(controller, 'answers', model.answers);
    Ember.set(controller, 'question', model.question);
  },
  // using RSVP hash to load two model hooks in one route
  actions: {
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      // this.transitionTo('index');
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var pregunta = params.pregunta;
      console.log (pregunta);
      pregunta.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return pregunta.save();
      });
      // this.transitionTo('index');
    },
  }
});
