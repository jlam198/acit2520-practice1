const express = require("express");
const PORT = process.env.PORT || 8007;
const app = express();
const fs = require("fs");

// Don't worry about these 4 lines below
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("createcard");
});

app.post("/", (req, res) => {
  let fname = req.body.name
  let ab = req.body.about
  let gh = req.body.github
  let tw = req.body.twitter
  console.log(req.body)
  res.render("homepage", { name: fname, about: ab, github: gh, twitter: tw})
});

app.get("/home", (req, res) => {
  fs.readFile("database.json", (err, data) => {
    if (err) {
      console.log(err)
    } else {
      datalist = JSON.parse(data)
      for (let x in datalist.users) {
        console.log(x.fullName)
      }
    }
  })
  res.send(datalist)
})

app.get("/people/:id", (req, res) => {
  let fname = req.body.name
  let ab = req.body.about
  let gh = req.body.github
  let tw = req.body.twitter
  res.render("homepage", { name: fname, about: ab, github: gh, twitter: tw});
});

app.get("/:id/photos", (req, res) => {
  const id = req.params.id;
});

app.listen(PORT, () => {
  console.log(`Server now is running at http://localhost:${PORT} 🚀`);
});
