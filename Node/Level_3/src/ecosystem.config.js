// management process running

module.exports = {
    apps: [
        {
            name: 'api',
            script: './index.js',
            env_production: {
                NODE_ENV: 'production'
            },
            env_development: {
                NODE_ENV: 'development'
            }
        }
    ]
}