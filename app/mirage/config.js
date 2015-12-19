export default function() {
    this.get('/posts', function(db) {
        return {
            data: db.posts.map(attrs => ({
                type: 'posts',
                id: attrs.id,
                attributes: attrs
            }))
        };
    });

    this.get('/posts/:id', function(db, request) {
        let id = request.params.id;
        console.log('mirage find a post');

        return {
            data: {
                type: 'posts',
                id: id,
                attributes: db.posts.find(id)
            }
        };
    });
}
