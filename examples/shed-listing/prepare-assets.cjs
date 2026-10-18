const fs = require("node:fs");
fs.mkdirSync("assets", { recursive: true });
fs.copyFileSync("node_modules/gsap/dist/gsap.min.js", "assets/gsap.min.js");
