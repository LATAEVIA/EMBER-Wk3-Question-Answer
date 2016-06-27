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
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var pregunta = params.pregunta;
      console.log (pregunta);
      pregunta.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return pregunta.save();
      });
      this.transitionTo('index');
    },

    // save3(params) {
    //   var newRental = this.store.createRecord('rental', params);
    //   var city = params.city;
    //   city.get('rentals').addObject(newRental);
    //   newRental.save().then(function() {
    //     return city.save();
    //   });
    //   this.transitionTo('city', params.city);
    // },
  }
});
