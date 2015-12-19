import Ember from 'ember';

export default Ember.Component.extend({
    showContent: false,
    actions: {
        toggleContent() {
            if (this.get('showContent')) {
                this.set('showContent', false);
            } else {
                this.set('showContent', true);
            }
        }
    }
});
