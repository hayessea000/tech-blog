const { UserPost } = require('../model');

const userPostData = [
  {
    title: 'How do I do HTML',
    body: 'I need help getting started in HTML',
    user_id: 1,
  },
  {
    title: 'How do I do CSS',
    body: 'I need help getting started in CSS',
    user_id: 5,
  },
  {
    title: 'How do I do JS',
    body: 'I need help getting started in JS',
    user_id: 4,
  },
  {
    title: 'How do I do NODE',
    body: 'I need help getting started in NODE',
    user_id: 3,
  },
  {
    title: 'How do I cook',
    body: 'I need help making food',
    user_id: 2,
  },
];

const seedUserPost = () => UserPost.bulkCreate(userPostData);

module.exports = seedUserPost;
