const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const multer = require('multer');
const { mergePDFs } = require('./merge'); // Import mergePDFs function
const upload = multer({ dest: 'uploads/' });

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"));
});

app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
  console.log(req.files);
  await mergePDFs(
    path.join(__dirname, req.files[0].path),
    path.join(__dirname, req.files[1].path)
  );
  res.redirect("/merged.pdf");
});


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
