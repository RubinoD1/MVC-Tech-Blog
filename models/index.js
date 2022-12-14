const User = require("./User");
const Post = require("./Post");
const Comment = require('./Comment');


// create associations

// A user can make many posts, but they can only belong to one user (created). Therefore, we have a one-to-many relationship. 
User.hasMany(Post, {
  foreignKey: 'user_id'
});

// setting the post to belong to only one user 
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});
  
  Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});
  
  User.hasMany(Comment, {
  foreignKey: 'user_id'
});
  
  Post.hasMany(Comment, {
  foreignKey: 'post_id'
});




module.exports = { User, Post, Comment };