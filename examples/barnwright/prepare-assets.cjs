const fs = require("node:fs");
for (const dir of ["assets", "typography/assets"]) {
  fs.mkdirSync(dir, { recursive: true });
  fs.copyFileSync("node_modules/gsap/dist/gsap.min.js", `${dir}/gsap.min.js`);
}
