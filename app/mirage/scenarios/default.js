export default function(server) {
    // Seed your development database using your factories. This
    // data will not be loaded in your tests.

    let post = server.create('post');
    let post2 = server.create('post');
    server.createList('post', 2);

    let comment1 = server.create('comment', {post: post, post_id: post.id });
    let comment2 = server.create('comment', {post: post, post_id: post.id });
    let comment3 = server.create('comment', {post: post2, post_id: post2.id });

    server.db.posts.update(post.id, {comments: [comment1, comment2]});
    server.db.posts.update(post2.id, {comments: [comment3]});
}
