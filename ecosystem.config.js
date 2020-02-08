module.exports = {
  apps: [
    {
      name: "api",
      script: "app.js",
      autorestart: true,
      watch: true,
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    },
    {
      name: "notes-pin-service",
      script: "notes-pin-service.js",
      autorestart: true,
      watch: true,
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
