const express = require("express");
const app = express();

// Root route
app.get("/", (req, res) => {
    res.send("get it");
});

// Catch-all route (must be last)
app.get("/*", (req, res) => {
    res.status(404).send("file not found!");
});

app.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});
