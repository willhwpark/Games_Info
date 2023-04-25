const mongoose = require("mongoose");

const dbName = "games";

// If a DB by this name does NOT exist before running the first time, then this will create it.

mongoose
  .connect(`mongodb://localhost/${dbName}`, {
    // Note: The useNewUrlParser and useUnifiedTopology are options we pass to handle deprecation warnings in our terminal
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`You are connected to the database called ${dbName}`);
  })
  .catch((err) => {
    console.log(
      `You had a problem connecting to the ${dbName}. Here is your error:`,
      err
    );
  });
