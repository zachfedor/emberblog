import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        newPost(data) {
            console.log('action bubbled');
            console.log(data.title);
            let post = this.store.createRecord('post', data);
            post.save();
        }
    }
});
