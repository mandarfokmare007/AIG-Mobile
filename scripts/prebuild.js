const path = require('path');
const { exec } = require('child_process');
const fs = require('fs');
const { rimraf } = require('rimraf'); // Correct import for rimraf 6.x

async function renameOutputFolder(buildFolderPath, outputFolderPath) {
    return new Promise((resolve, reject) => {
        fs.rename(buildFolderPath, outputFolderPath, (err) => {
            if (err) reject(err);
            else resolve('Successfully built!');
        });
    });
}

async function execPostReactBuild(buildFolderPath, outputFolderPath) {
    if (!fs.existsSync(buildFolderPath)) {
        throw new Error('build folder does not exist');
    }

    // If the output folder exists, delete it
    if (fs.existsSync(outputFolderPath)) {
        await rimraf(outputFolderPath); // Use rimraf with await
    }

    // Rename the build folder to the output folder
    await renameOutputFolder(buildFolderPath, outputFolderPath);
    console.log('Build folder moved to output folder successfully!');
}

module.exports = async () => {
    const projectPath = path.resolve(process.cwd(), './node_modules/.bin/react-scripts');
    
    try {
        await new Promise((resolve, reject) => {
            exec(`${projectPath} build`, (error) => {
                if (error) {
                    console.error(error);
                    reject(error);
                } else {
                    resolve();
                }
            });
        });

        // Execute post-build operations
        await execPostReactBuild(
            path.resolve(__dirname, '../build/'),
            path.join(__dirname, '../www/')
        );

        console.log('Build and folder operations completed successfully!');
    } catch (error) {
        console.error('Error during build process:', error);
    }
};
