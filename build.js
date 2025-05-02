import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const vitePath = path.resolve(__dirname, 'node_modules', 'vite', 'bin', 'vite.js');

console.log('Vite path:', vitePath);
console.log('Running build...');

const child = spawn('node', [vitePath, 'build'], { 
  stdio: 'inherit',
  shell: true 
});

child.on('close', (code) => {
  console.log(`Build process exited with code ${code}`);
  process.exit(code);
}); 