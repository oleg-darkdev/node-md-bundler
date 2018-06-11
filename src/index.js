const fs = require('fs'),
      cl = require('node-cl-log');
/*
  @description Is responsible for assembly of several *.md files in one bandle in a certain order which is described in the file.
  @param Takes all files from the transferred directory.
  @param The file (assembly) collects in transferred.
  @param Order of turn in which files from the first argument will gather in the file from the second argument.
*/
class BundleMd {
  constructor(arrayConfig) {
    this.pathSrcMd = arrayConfig[0];
    this.pathBuildMd = arrayConfig[1];
    this.filesListOrder = arrayConfig[2];
  }
  genBundle() {
    const bundleMdArr = [],
          pathSrcMd = this.pathSrcMd,
          pathBuildMd = this.pathBuildMd,
          filesListOrder = this.filesListOrder;
    fs.readdir('./data/', function (err, items) {
      // create new array with elements in the necessary order
      filesListOrder.forEach(el => {
        bundleMdArr.push(items[items.indexOf(el)]);
      });
      // cl.log(bundleMdArr )
      // cl.log(items )
      bundleMdArr.forEach(el => {
        fs.readFile(pathSrcMd + el, function (err, data) {
          if (err) {
            cl.log(err);
          } else {
            // cl.log(data); // file content
            fs.open(pathBuildMd, "w+", function (err, fileHandle) {
              if (!err) {
                fs.appendFile(pathBuildMd, data, function (err) {
                  cl.gre(`Assembly of a bandl has taken place successfully, you can take away the collected file ${pathBuildMd}`);
                  if (err) throw err;
                });
              } else {
                cl.red(`There was an error creating ${pathBuildMd}`);
              }
            }); // end open
          }; // end else
        }); // end readfile
      }); // bundleMdArr
    }); // end readdir
  };
};

module.exports = BundleMd;
