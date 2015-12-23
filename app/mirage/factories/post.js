import Mirage, {faker}  from 'ember-cli-mirage';

const hacker = faker.hacker;
let titles = [];
titles.push(hacker.ingverb() + ' the ' + hacker.adjective() + ' ' + hacker.noun());
titles.push('how to ' + hacker.verb() + ' ' + hacker.abbreviation());
titles.push(hacker.ingverb() + ' my ' + hacker.adjective() + ' ' + hacker.noun());
titles.push('why ' + hacker.noun() + ' sucks');
titles.push(hacker.ingverb() + ' a ' + hacker.adjective() + ' ' + hacker.noun());
titles.push(hacker.abbreviation() + ' considered harmful');

export default Mirage.Factory.extend({
    title(i) { return titles[i]; },
    author() { return faker.name.firstName() + ' ' + faker.name.lastName(); },
    date() { return faker.date.past(); },
    comments() { return null; },
    content() { return faker.lorem.paragraphs(); }
});
