module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a487a3bccfc51c168d8259243f31d47c'),
    },
  },
  cron: {
    enabled: true
  },
});
