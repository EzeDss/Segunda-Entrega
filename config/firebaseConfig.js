var admin = require("firebase-admin");
let fs = require("fs")
var serviceAccount = JSON.parse(fs.readFileSync("../../dbfirebase/back-3e0d2-firebase-adminsdk-4qqzj-6c86f8fca1.json"))

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});