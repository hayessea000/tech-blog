const { User } = require('../model');

const userData = [
  {
    username: "Smith",
    password: "password12345"
  },
  {
    username: "Anderson",
    password: "password12345"
  },
  {
    username: "Hayes",
    password: "password12345"
  },
  {
    username: "Johnson",
    password: "password12345"
  },
  {
    username: "Stone",
    password: "password12345"
  }
];

const seedUser = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;