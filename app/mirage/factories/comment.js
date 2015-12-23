import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
    post() { return null; },
    post_id() { return null; },
    name() { return faker.name.firstName() + ' ' + faker.name.lastName(); },
    content() { return faker.lorem.paragraph(); }
});
