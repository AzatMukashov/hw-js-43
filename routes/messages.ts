import express from "express";
import {writeMessage} from "./writeFile";
import {readMessages} from "./readFile";

const router = express.Router();
router.post('/create', async (req, res) => {
    try {
        const {message} = req.body;
        const data = await writeMessage(message);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
});

router.get('/messages', async (req, res) => {
    try {
        const messages = await readMessages();
        res.json(messages);
    } catch (e) {
        console.error(e);
        res.status(500).json({error: 'Internal server error'});
    }
});
export default router;