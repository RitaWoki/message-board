import Ember from 'ember';

export default Ember.Service.extend({
  question: [],

  add(question) {
    this.get('question').pushObject(question);
  }
});
