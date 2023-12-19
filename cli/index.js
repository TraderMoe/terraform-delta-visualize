const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const fsExtra = require('fs-extra');

const jsonFilePath = process.argv[2];

if (!jsonFilePath) {
  console.error('Usage: cli.js <path-to-json-file>');
  process.exit(1);
}

const executingPath = process.cwd();
const distPath = path.resolve(__dirname, '../frontend/dist');
const targetPath = path.resolve(executingPath, 'terraform-delta-visualize');

const rootPlan = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

console.log('Executing path:', executingPath);

const npmRunBuild = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run', 'build', '-- --base=' + executingPath], {
  env: {
    ...process.env,
    ROOT_PLAN: JSON.stringify(rootPlan),
    LOCAL_HOSTING: true,
  },
  cwd: path.resolve(__dirname, '../frontend'),
  stdio: 'inherit',
});


// Handle Exit
npmRunBuild.on('exit', (code) => {
  process.exit(code);
});

npmRunBuild.on('close', (code) => {
  console.log(`child process close all stdio with code ${code}`);
  fsExtra.copy(distPath, targetPath, (err) => {
    if (err) {
      console.error('Error copying dist folder:', err);
      process.exit(1);
    }
    console.log('Dist folder copied successfully!');
  });
})