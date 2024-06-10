const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;

// Function to update package.json
function updatePackageJson(filePath) {
    const packageJson = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Store original package.json keys
    const keysOrder = Object.keys(packageJson);

    // Update the package version
    packageJson.version = "0.0.1";

    // Update local packages versions
    if (packageJson.dependencies) {
        for (const key in packageJson.dependencies) {
            if (key.startsWith('@juriorg/')) {
                packageJson.dependencies[key] = "*";
            }
        }
    }

    if (packageJson.devDependencies) {
        for (const key in packageJson.devDependencies) {
            if (key.startsWith('@juriorg/')) {
                packageJson.devDependencies[key] = "*";
            }
        }
    }

    // Reorder keys to ensure "version" is after "name"
    const reorderedPackageJson = {};
    keysOrder.forEach(key => {
        reorderedPackageJson[key] = packageJson[key];
    });

    // Write the updated package.json back to the file
    fs.writeFileSync(filePath, JSON.stringify(reorderedPackageJson, null, 2) + '\n');
}

// Function to recursively find all package.json files in a directory
function findPackageJsonFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory() && !file.includes('node_modules')) {
            results = results.concat(findPackageJsonFiles(file));
        } else if (file.endsWith('package.json')) {
            results.push(file);
        }
    });
    return results;
}

// Get the root directory of the workspace
const rootDir = path.resolve(__dirname, '..');

// Find all package.json files in the workspace
const packageJsonFiles = findPackageJsonFiles(rootDir);

// Update all package.json files
packageJsonFiles.forEach(updatePackageJson);

// Delete all local git tags
execSync('git tag | xargs git tag -d', { stdio: 'inherit' });

console.log('Versions reset and local git tags deleted.');
