module.exports = {
  apps: [{
    name: 'test-pm2',
    script: 'yarn',
    args: 'start -p 3000'
  }]
};
