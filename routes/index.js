
const router = require('express').Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
    return res.status(404).send('Please use a vaild route.');
});  
  
module.exports = router;