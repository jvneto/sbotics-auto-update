var extend = require('extend-shallow');
const fs = require('fs-extra')

const ScanTreeFiles = (options) => {
  options = extend(
    {
      globalDir: '',
      dir: '',
      files_: '',
    },
    options,
  );
  const globalDir = options.globalDir;
  const dir = options.dir;
  var files_ = options.files_;

  files_ = files_ || [];

  const filesMap = fs.readdirSync(dir);

  filesMap.map(file => {
    var name = dir + '/' + file;
    // console.log(fs.statSync(name).isDirectory());
    console.log(fs.statSync(name));
    if (fs.statSync(name).isDirectory()) {
      ScanTreeFiles({
        globalDir: globalDir,
        dir: name,
        files_: files_,
      });
    } else {
      files_.push(name.replace(globalDir, ''));
      console.log(name.replace(globalDir, ''));
    }
  });

  return files_;
};

exports.ScanTreeFiles = ScanTreeFiles;