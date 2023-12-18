const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const jsonFilePath = process.argv[2];

if (!jsonFilePath) {
  console.error('Usage: cli.js <path-to-json-file>');
  process.exit(1);
}

const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

const childProcess = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run',  'dev' , jsonData], {
  env: {
    ...process.env,
  },
  cwd: path.resolve(__dirname, '../frontend'),
  stdio: 'inherit',
});

console.log('test');

// Handle Exit
childProcess.on('exit', (code) => {
  process.exit(code);
});