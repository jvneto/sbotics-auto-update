const path = require('path');
const { ScanTreeFiles } = require('./utils/__tree-files.js');

// const directoryPath = path.join(__dirname, '../releases/windows/');
const directoryPath = "C:/Users/Julio/Documents/sBotics_Projetos/releases/windows";
ScanTreeFiles(
  {
    globalDir: directoryPath,
    dir: directoryPath,
  }
)
// console.log(ScanTreeFiles(directoryPath));

// function getFiles(dir, files_) {
//   files_ = files_ || [];
//   var files = fs.readdirSync(dir);
//   for (var i in files) {
//     var name = dir + '/' + files[i];
//     console.log(fs.statSync(name).isDirectory());
//     if (fs.statSync(name).isDirectory()) {
//       getFiles(name, files_);
//     } else {
//       files_.push(name);
//     }
//   }
//   return files_;
// }

// getFiles(directoryPath);

// console.log(getFiles(directoryPath))
// fs.readdir(directoryPath, function (err, files) {
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     } 
//     //listing all files using forEach
//     files.forEach(function (file) {
//         // Do whatever you want to do with the file
//         console.log(file); 
//     });
// });
// const cliProgress = require('cli-progress');
// const cliSpinners = require('cli-spinners');

// const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
// cliSpinners.dots;
// bar1.start(200, 0);
// bar1.update(100);
// bar1.stop();
