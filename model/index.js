const User = require("./User")
const UserPost = require("./UserPost")
const Comments = require("./Comments")

UserPost.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(UserPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Comments.belongsTo(UserPost, {
    foreignKey: 'userPost_id',
});

UserPost.hasMany(Comments, {
    foreignKey: 'userPost_id',
    onDelete: 'CASCADE',
});

Comments.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

module.exports = { UserPost, User, Comments}