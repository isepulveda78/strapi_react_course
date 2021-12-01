'use strict';

const { default: createStrapi } = require("strapi");

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#cron-tasks
 */

module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */
  // '0 1 * * 1': () => {
  //
  // }

  '0 0 0 * * *': async () => {
    console.log("Once a day, at midnight")

    //Retrieve the users 
    const users = await strapi.plugins['user-permissions'].services.user.fetchAll({})

    const res = await Promise.all(users.map(async user => {
      //Retrieve all post created by this user 
      const posts = await strapi.services.post.find({author: user.id})
      console.log("posts.length", post.length)

      const total = posts.reduce((acc, post) => acc + posts.likes, 0)

      await strapi.plugins['email'].services.email.send({
        to: user.email,
        from: 'Strapitest@localhost.com',
        subject: 'Your likes total',
        text: `You got ${total} likes!`
      })
    }))
  }
};
