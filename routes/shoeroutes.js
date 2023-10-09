const express = require('express');
const router = express.Router();

const shoe = require('../modals/shoemodal');

router.get('/getshoes', async (req, res) => { // Updated route path to '/getshoes'
    try {
        const shoes = await shoe.find({});
        res.send(shoes);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

module.exports = router;