function setEnv() {
  fs = require("fs");
  writeFile = fs.writeFile;

  targetPath = "./src/environments/environment.prod.ts";

  envConfigFile = `export const environment = {
    GEMINI_API_KEY = ${process.env.GEMINI_API_KEY}
  }`;

  writeFile(targetPath, envConfigFile, function (err) {
    if (err) {
      console.error(err);
      throw err;
    }
  });
}

setEnv();
