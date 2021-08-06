const fs = require('fs');

const newName = process.argv[2];
if (!newName) {
  console.error('Please provide a new name for the plugin, e.g.');
  console.error('$ node rename myAwesomePlugin');
} else {
  const pluginIndexFile = fs.readFileSync('./src/index.ts');
  fs.writeFileSync('./src/index.ts', pluginIndexFile.toString().replace(/MyTemplatePlugin/g, newName));
  const pluginClassFile = fs.readFileSync('./src/MyTemplatePlugin.tsx');
  fs.writeFileSync('./src/MyTemplatePlugin.tsx', pluginClassFile.toString().replace(/MyTemplatePlugin/g,newName))
  fs.renameSync('./src/MyTemplatePlugin.tsx', `./src/${newName}.tsx`)
}
