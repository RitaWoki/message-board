import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];
  if(question.get('answers').get('length') >=5){
    return Ember.String.htmlSafe('(<i class="small material-icons">star</i>)');
  }
  else {
    return ;
  }
}

export default Ember.Helper.helper(questionPopularity);
