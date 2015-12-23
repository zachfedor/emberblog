import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        newPost(data) {
            let self = this;

            let post = this.store.createRecord('post', data);
            post.date = new Date();
            
            post.save().then(() => {
                self.transitionTo('posts.post', post);
            });
        }
    }
});
