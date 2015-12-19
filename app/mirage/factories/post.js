import Mirage, {faker}  from 'ember-cli-mirage';

const hacker = faker.hacker;
let titles = [];
titles.push(hacker.ingverb() + ' The ' + hacker.adjective() + ' ' + hacker.noun());
titles.push('How To ' + hacker.verb() + ' ' + hacker.abbreviation());
titles.push(hacker.ingverb() + ' My ' + hacker.adjective() + ' ' + hacker.noun());
titles.push('Why ' + hacker.noun() + ' Sucks');
titles.push(hacker.ingverb() + ' A ' + hacker.adjective() + ' ' + hacker.noun());
titles.push(hacker.abbreviation() + ' Considered Harmful');

export default Mirage.Factory.extend({
    title(i) { return titles[i]; },
    author() { return faker.name.firstName() + ' ' + faker.name.lastName(); },
    date() { return faker.date.past(); },
    content() { return faker.lorem.paragraphs(); },
    attachments() { return null; }
});
