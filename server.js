const mongoose = require("mongoose");
const app = require("./app");
const checkFolders = require("./helpers");

const { DB_HOST, PORT = 8080 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, async () => {
      await checkFolders.createUploadDir();
      await checkFolders.createAvatarsDir();
      console.log(`Database connection successful. API is on port: ${PORT}`);
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
