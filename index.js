import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/public', express.static(path.join(__dirname, 'client', 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
})

/*app.get('/users', async (req, res) => {
    const data = await fs.readFile('./users.json', 'utf8');
    const users = JSON.parse(data).users;
    return res.send(users);
})

app.listen(4000, () => {
    console.log('Open your sweety link: http://127.0.0.1:4000/users')
})*/

/*app.get('/users/:userId', async (req, res) => {
    const data = await fs.readFile('./users.json', 'utf8');
    const {users} = JSON.parse(data);
    const userId = parseInt(req.params.userId);
    const user = users.find(user => user.id === userId);
    if (user) {
        return res.send(user);
    } else {
        return res.status(404).send({state: 'User not found'});
    }
})*/

app.listen(4000, () => {
    console.log('Sweetheart open this in your holy browser: http://127.0.0.1:4000')
})