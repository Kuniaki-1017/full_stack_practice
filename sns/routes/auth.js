const router = require("express").Router();


router.get("/", (req, res) => {
    res.send("auth router");
});
router.get("/profile", (req, res) => {
    res.send("auth profile");
});

module.exports = router;