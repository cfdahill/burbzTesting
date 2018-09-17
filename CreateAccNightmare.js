var Nightmare = require("nightmare");
var nightmare = Nightmare({ show: true});

nightmare
.goto("http://burbz-mvp-angular-app.s3-website-us-east-1.amazonaws.com/")
.type("#mat-input-0", "Rob")
.type("#mat-input-1", "Ot")
.type("#mat-input-2", "3216549870")
.type("#mat-input-3", "fake7@mail.com")
.type("#mat-input-4", "Aa1!Ss@2")
.type("#mat-input-5", "Aa1!Ss@2")
.click(".mat-select-placeholder")
.wait(300)
.click("#mat-option-1")
.click("#acceptedTerms-input")
.click("#signupbutton")
.wait(2000)
// .type("#mat-input-3", "dahill.chay@gmail.com")
// .type("#mat-input-4", "Burbz12!")
// .click("#signupbutton")
.url()
.end()
.then(url => {
  console.log(url);
})
.catch(function(err) {
    console.error("Error: " + err);
});

//fake@mail.com, Aa1!Ss@2