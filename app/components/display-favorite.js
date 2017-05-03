import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),
  actions: {
    addToFavs(question) {

      this.get('quizFavorite').add(question);
    }
  }
});
