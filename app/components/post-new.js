import Ember from 'ember';

export default Ember.Component.extend({
    title: null,
    author: null,
    content: null,

    actions: {
        submit() {
            let data = {
                title: this.title,
                author: this.author,
                content: this.content
            };
            this.sendAction('action', data);
        }
    }
});
