const express = require('express');
const router = express.Router();

const COLOR = (process.env.NODE_ENV === 'production') ? '00FFFF' : 'FF0000';

/**
 * GET color blocks
 * route: /block/rgbMatrix
 * returns: [[colorHex]]
 */
router.get('/rgbMatrix', async (req, res, next) => {
	res.json([[COLOR]])
});

/**
 * POST
 * description: Colors the defined block with given color
 * route: /block/color
 * body: { x: number, y: number, color: string }
 * color example: 'FFFFFF'
 */
router.post('/color', async (req, res, next) => {
	throw new Error("If it crashes it works! :)");
});

module.exports = router;
