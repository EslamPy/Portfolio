import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function buildProject() {
  console.log('Starting Vite build process...');
  
  try {
    // Use the Vite build API
    const result = await build({
      configFile: path.resolve(__dirname, 'vite.config.js'),
      root: __dirname,
      logLevel: 'info'
    });
    
    console.log('Build completed successfully');
    return 0;
  } catch (error) {
    console.error('Build failed:', error);
    return 1;
  }
}

buildProject()
  .then(code => {
    process.exit(code);
  })
  .catch(err => {
    console.error('Unexpected error:', err);
    process.exit(1);
  }); 