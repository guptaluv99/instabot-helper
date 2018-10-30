var mongoose = require('mongoose');
var Moment = require('moment');
var Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate')(mongoose);

// define the schema for our user model
var hashtagSchema = mongoose.Schema({
    hashTags: [{type: String}],
    explored: {type: Number, default: 0},
    postsToExplore: {type: Number, default: 0},
    topPosts: {type: Boolean, default: false},
    toFollow: {type: Boolean, default: false},
    toLike: {type: Boolean, default: false},
    toUnfollow: {type: Boolean, default: true},
    successfullFollows: {type: Number, default: 0},
    alreadyFollowed: {type: Number, default: 0},
    successfullLikes: {type: Number, default: 0},
    followBacks: {type: Number, default: 0},
    unfollowed: {type: Number, default: 0},
    archived: {type: Number, default: 0},
    _created: {type: Date, default: Date.now}
});

hashtagSchema.plugin(deepPopulate);
// create the model for users and expose it to our app
module.exports = mongoose.model('hashtag', hashtagSchema);
