"use strict";const fs=require("fs"),cl=require("node-cl-log");class BundleMd{constructor(e){this.pathSrcMd=e[0],this.pathBuildMd=e[1],this.filesListOrder=e[2]}genBundle(){const e=[],s=this.pathSrcMd,t=this.pathBuildMd,r=this.filesListOrder;fs.readdir("./data/",function(c,i){r.forEach(s=>{e.push(i[i.indexOf(s)])}),e.forEach(e=>{fs.readFile(s+e,function(e,s){e?cl.log(e):fs.open(t,"w+",function(e,r){e?cl.red(`There was an error creating ${t}`):fs.appendFile(t,s,function(e){if(cl.gre(`Assembly of a bandl has taken place successfully, you can take away the collected file ${t}`),e)throw e})})})})})}}module.exports=BundleMd;