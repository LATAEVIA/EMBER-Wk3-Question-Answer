import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    saveAnswer() {
      var params = {
        respuesta: this.get('respuesta') ? this.get('respuesta') : "",
        author: this.get('author') ? this.get('author') : "",
        pregunta: this.get('question')
      };
      console.log(params);
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
