import Ember from 'ember';

export default Ember.Component.extend({
    title: null,
    author: null,
    content: null,
    comment: null,

    actions: {
        submit() {
            let data = {
                title: this.title,
                author: this.author,
                content: this.content,
                comment: this.comment
            };
            this.sendAction('action', data);
        }
    }
});
