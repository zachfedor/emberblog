export default function() {
    this.get('/posts', function() {
        return {
            data: [{
                type: 'posts',
                id: 1,
                attributes: {
                    title: "Hello World",
                    author: "Zach Fedor",
                    date: "2015.12.15",
                    content: "This is our first post."
                }
            }, {
                type: 'posts',
                id: 2,
                attributes: {
                    title: "Second Post",
                    author: "Zach Fedor",
                    date: "2015.12.16",
                    content: "This is our second post."
                }
            }, {
                type: 'posts',
                id: 3,
                attributes: {
                    title: "We're Done",
                    author: "Zach Fedor",
                    date: "2015.12.17",
                    content: "It was a good run, but we quit."
                }
            }]
        };
    });
}
