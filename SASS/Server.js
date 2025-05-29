const express = require("express"); // You forgot to require express
const path = require("path"); // 'Path' should be lowercase

const app = express();

const HTTP_PORT = process.env.PORT || 8080;

// Serve static files from the "public" directory
app.use(express.static("public"));

// Route for the home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "home.html"));
});

// Start the server
app.listen(HTTP_PORT, () => {
    console.log(`Server listening on port ${HTTP_PORT}`);
});
