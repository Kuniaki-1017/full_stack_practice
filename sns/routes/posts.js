const router = require("express").Router();


router.get("/", (req, res) => {
    res.send("posts router");
});
router.get("/profile", (req, res) => {
    res.send("posts profile");
});

module.exports = router;