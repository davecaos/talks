var Pink = require("pink");
require("pink/css/themes/simon.less");
//require("pink/css/themes/lalala.less");
//require("css/lalala.less");


console.log(process.cwd())
// C:\Project
console.log(__dirname)
// C:\Project
console.log(__dirname===process.cwd())

new Pink("#slides", {
  "background": require("pink/modules/background"),
  "image": require("pink/modules/image")
});
