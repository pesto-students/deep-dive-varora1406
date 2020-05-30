var humblejs = require('humblejs');

var my_db = new humblejs.Database('my_db');

// This creates a new BlogPost class which stores documents in the
// ``'blog_posts'`` collection in the ``'my_db'`` database.
var BlogPost = my_db.document('blog_posts', {
  author: 'a',
  title: 't',
  body: 'b',
  published: 'p'
});

// Otherwise it's just a normal Document class
var post = new BlogPost();
post.author = 'shakefu';
post.title = "How to use the document declaration factory";
post.body = "See the documentation.";
post.published = new Date();
post.save();