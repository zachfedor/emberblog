import Ember from 'ember';

const posts = [{
    id: 1,
    title: "Hello World",
    author: "Zach Fedor",
    date: "2015.12.15",
    content: "This is our first post."
}, {
    id: 2,
    title: "Second Post",
    author: "Zach Fedor",
    date: "2015.12.16",
    content: "This is our second post."
}, {
    id: 3,
    title: "We're Done",
    author: "Zach Fedor",
    date: "2015.12.17",
    content: "It was a good run, but we quit."
}]

export default Ember.Route.extend({
    model() {
        return posts;
    },
});
