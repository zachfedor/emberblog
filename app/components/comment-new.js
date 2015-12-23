import Ember from 'ember';

export default Ember.Component.extend({
    name: null,
    content: null,

    actions: {
        submit() {
            let data = {
                name: this.name,
                content: this.content
            };
            this.sendAction('action', data);
        }
    }
});
