const express = require('express');
const router = express.Router();

// routes - endpoints (bad practice).
router.get("/user", (req, res, next) => {
    res.json({
        data: "Good Job Bro!"
    });
});


// routes - endpoints (best practice).
// router.post("/product", authCheck, adminCheck, validateCreateProduct, create);


module.exports = router;


