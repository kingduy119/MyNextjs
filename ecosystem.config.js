// PM2 config
module.exports = {
    apps: [{
        name: "nextjs",
        script: "server/app.js",
        instance: 1,
        exec_mode: "cluster",
        watch: true,
        env: {
            NODE_ENV: "development",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
}