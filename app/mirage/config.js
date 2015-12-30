export default function() {
    const apiRoot = "http://localhost:4200";

    this.get('/posts', (db) => {
        let data = db.posts.map((attrs) => ({
            type: 'posts',
            id: attrs.id,
            attributes: attrs,
            relationships: {
                comments: {
                    links: {
                        related: apiRoot + '/posts/' + attrs.id + '/comments'
                    }
                }
            }
        }));

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

        let data = {
            type: 'posts',
            id: post.id,
            attributes: post,
            relationships: {
                comments: {
                    links: {
                        related: apiRoot + "/posts/" + request.params.id + "/comments"
                    }
                }
            }
        };

        return { data };
    });

    this.get('/posts/:id/comments', (db, request) => {
        let comments = db.comments.where({ post_id: request.params.id });

        let data = comments.map((attrs) => {
            return {
                type: 'comments',
                id: attrs.id,
                attributes: attrs
            };
        });

        return { data };
    });

    this.get('/comments', (db) => {
        let data = db.comments.map((attrs) => ({
            type: 'comments',
            id: attrs.id,
            attributes: attrs,
            relationships: {
                posts: {
                    links: {
                        related: apiRoot + '/posts/' + attrs.post_id
                    }
                }
            }
        }));

        return { data };
    });

    this.post('/comments', (db, request) => {
        let attrs = JSON.parse(request.requestBody).data.attributes;

        let comment = db.comments.insert(attrs);

        let data = {
            type: 'comments',
            id: comment.id,
            attributes: comment
        };

        return { data };
    });

    this.get('comments/:id', (db, request) => {
        let comment = db.comments.find(request.params.id);

        let data = {
            type: 'comments',
            id: comment.id,
            attributes: comment,
            relationships: {
                posts: {
                    links: {
                        related: apiRoot + '/posts/' + comment.post_id
                    }
                }
            }
        };

        return { data };
    });
}
