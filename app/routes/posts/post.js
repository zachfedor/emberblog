import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('post', params.post_id);
    },
    actions: {
        newComment(data) {
            // set the relationship
            data.post_id = this.currentModel.id;
            data.post = this.store.peekRecord('post', this.currentModel.id);

            let comment = this.store.createRecord('comment', data);

            comment.save();
        }
    }
});
