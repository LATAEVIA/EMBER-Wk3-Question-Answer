import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({

});


import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  respuesta: DS.attr()
  // question: DS.belongsTo('question', { async: true }),
});
