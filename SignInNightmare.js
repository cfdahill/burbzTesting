var Nightmare = require("nightmare");
var nightmare = Nightmare({ show: true});

nightmare
.goto("http://burbz-mvp-angular-app.s3-website-us-east-1.amazonaws.com/")
.click('.loginBtn')
.wait(3000)
.type("#mat-input-6", "dahill.chay@gmail.com")
.type("#mat-input-7", "Burbz12!")
.click("#signupbutton")
.wait(2000)
.url()
.end()
.then(url => {
  console.log(url);
})
.catch(function(err) {
    console.error("Error: " + err);
});