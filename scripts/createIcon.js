const fs = require("fs");
const path = require('path');

//设置根目录
const appIconPath = path.resolve(__dirname, "../src/components/AppIcon");
const sourceIconDir = path.resolve(appIconPath, "icon");
const targetIconNameFile = path.resolve(appIconPath, "constants.ts");

const arr = [];
const files = fs.readdirSync(sourceIconDir);

for (let i = 0; i < files.length; i++) {
    const filePath = {};
    filePath.name = files[i];
    filePath.iconName = path.basename(files[i], path.extname(files[i]));
    const fileStat = fs.statSync(path.join(sourceIconDir, files[i]));
    if (fileStat.isDirectory()) {
        filePath.type = 'dir';
    } else {
        filePath.type = path.extname(files[i]).substring(1);
    }
    arr.push(filePath);
}

const getContent = () => {
    const nameToFile = {};
    arr.forEach(({iconName, name}) => {
        nameToFile[iconName] = `require('./icon/${name}')`
    });

    return `
/**
 * 注意:
 * 该文件是自动生成的
 * 不要手动修改！！！
 * 不要手动修改！！！
 * 不要手动修改！！！
 */
export const nameToType: {
    [index: string]: {
        default: {
            content: string;
            id: string;
        }
    }
} = ${JSON.stringify(nameToFile, undefined, 4)};    
`.replace(/"/g, "")
};

//将数组转换成字符串后写入data.txt文件中保存
fs.writeFileSync(targetIconNameFile, getContent());
