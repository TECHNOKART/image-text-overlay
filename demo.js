const fs = require('fs');
const path = require('path');

const folderPath = './input'; // Replace with the path to your folder
const jsonFilePath = 'file_names.json'; // Replace with the desired path for the JSON file

function getFilenamesInFolder(folderPath) {
    return new Promise((resolve, reject) => {
        fs.readdir(folderPath, (err, files) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(files);
        });
    });
}

async function createFileNamesJSON() {
    try {
        const files = await getFilenamesInFolder(folderPath);
        const imageFiles = files.filter((file) => {
            const filePath = path.join(folderPath, file);
            return fs.statSync(filePath).isFile() && isImageFile(filePath);
        });

        const data = {
            inputFile: imageFiles.map((fileName) => ({ input:fileName,output:fileName,format: 'mm/dd/yyyy',date: '4/1/2023',})),
        };

        const jsonContent = JSON.stringify(data, null, 4);

        fs.writeFile(jsonFilePath, jsonContent, 'utf8', (err) => {
            if (err) {
                console.error('Error writing JSON file:', err);
                return;
            }
            console.log('File names JSON file created successfully!');
        });
    } catch (error) {
        console.error('Error reading folder:', error);
    }
}
function isImageFile(filePath) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    const extension = path.extname(filePath).toLowerCase();
    return imageExtensions.includes(extension);
}

createFileNamesJSON();
