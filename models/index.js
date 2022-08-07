const User = require("./User");
const Post = require("./Post");



// create associations

// A user can make many posts, but they can only belong to one user (created). Therefore, we have a one-to-many relationship. 
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

// setting the post to belong to only one user 
Post.belongsTo(User, {
    foreignKey: 'user_id',
  });



module.exports = { User, Post };