export default function() {
    // this.get('/posts', ['posts', 'comments']);
    this.get('/posts', (db) => {
        let data = db.posts.map((attrs) => ({
            type: 'posts',
            id: attrs.id,
            attributes: attrs,
            relationships: {
                comments: {
                    data: []
                }
            }
        }));

        data.forEach((value) => {
            console.log("post id: " + value.id);
            let comments = db.comments.where({ post_id: value.id });
            console.log("comments: " + comments.length);
            let commentData = comments.map((attrs) => {
                return { type: 'comments', id: attrs.id, attributes: attrs };
            });
            value.relationships.comments.data = commentData;
        });

        return { data };
    });

    this.post('/posts', (db, request) => {
        var attrs = JSON.parse(request.requestBody).post;
        var post = db.posts.insert(attrs);
        let data = {
                type: 'posts',
                id: post.id,
                attributes: post
        };

        return { data };
    });

    this.get('/posts/:id', (db, request) => {
        let post = db.posts.find(request.params.id);
        let comments = db.comments.where({ post_id: post.id });
        let data = {
            type: 'posts',
            id: post.id,
            attributes: post,
            relationships: {
                comments: {
                    data: []
                }
            }
        };

        console.log("this posts' comments:");
        console.log(comments);
        let commentData = comments.map((attrs) => {
            return { type: 'comments', id: attrs.id, attributes: attrs };
        });
        console.log(commentData);

        data.relationships.comments.data = commentData;

        return { data };
    });

    this.get('/comments', (db) => {
        let data = db.comments.map(attrs => ({
            type: 'comments',
            id: attrs.id,
            attributes: attrs
        }));

        return { data };
    });

    this.get('comments/:id', (db, request) => {
        let comment = db.comments.find(request.params.id);

        let data = {
            type: 'comments',
            id: comment.id,
            attributes: comment
        };

        return { data };
    });
}
