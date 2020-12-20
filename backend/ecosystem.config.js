module.exports = {
  apps: [
    {
      name: 'snoke-api',
      script: 'app.js',
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
        NODE_PATH: './src',
      },
    },
  ],
};
