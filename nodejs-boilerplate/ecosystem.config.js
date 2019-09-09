module.exports = {
  apps: [{
    name: 'app1',
    script: './src/index.js',
    output: './server/logs/out.log',
    error: './server/logs/error.log',
    merge_logs: true
  }]
}
