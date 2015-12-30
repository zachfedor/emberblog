import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        newPost(data) {
            let self = this;

            let content = data.comment;
            delete data.comment;

            let post = this.store.createRecord('post', data);
            post.date = new Date();

            console.log("typeof post: " + typeof post);
            post.save().then((result) => {
                console.log("typeof result: " + typeof result);
                let comment = self.store.createRecord('comment', {
                    name: 'anonymous',
                    content: content,
                    post_id: result.id,
                    post: result
                });
                console.log("typeof comment: " + typeof comment);

                comment.save().then(() => {
                    self.transitionTo('posts.post', post);
                });
            });
        }
    }
});
