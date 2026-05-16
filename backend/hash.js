const bcrypt = require("bcrypt");

bcrypt.hash("CetiColomos2026", 10)
  .then(hash => {
    console.log(hash);
  })
  .catch(console.error);