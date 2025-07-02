import express from "express";

const app = express();

app.use(express.json());

app.post("/signup", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
});

app.post("/signin", async function (req, res) {});

app.listen(3000);
