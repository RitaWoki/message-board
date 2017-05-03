import Ember from 'ember';

export default Ember.Component.extend({
  quizFavorite: Ember.inject.service(),

answerCount: Ember.computed('question.answers', function() {
  var answerAmount = this.get('question.answers.length');
  return answerAmount;
}),

actions: {
  addToFavs(question) {

    this.get('quizFavorite').add(question);
  }
}
});
