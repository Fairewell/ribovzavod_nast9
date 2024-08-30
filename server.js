const express = require('express'); 
const bodyParser = require('body-parser'); 
const fs = require('fs'); 
const crypto = require('crypto'); 
const cors = require("cors"); 
const { log } = require('console');
require('dotenv').config(); // Для загрузки переменных окружения 

const app = express(); 
app.use(cors()); 
const PORT = 3000;


// Используем фиксированный ключ и вектор инициализации (IV) 
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY; // Должен быть 32 байта 
const IV = process.env.IV; // Должен быть 16 байтов 
const SERVER_CLOSE_CODE = process.env.SERVER_CLOSE_CODE;

// Функция для шифрования 
function encrypt(text) { 
    const algorithm = 'aes-256-cbc'; 
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(ENCRYPTION_KEY), Buffer.from(IV)); 
    let encrypted = cipher.update(text, 'utf8', 'hex'); 
    encrypted += cipher.final('hex'); 
    return encrypted; 
} 
// Функция для расшифрования 
function decrypt(text) { 
    const algorithm = 'aes-256-cbc'; 
    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(ENCRYPTION_KEY, 'hex'), Buffer.from(IV, 'hex')); 
    let decrypted = decipher.update(text, 'hex', 'utf8'); 
    decrypted += decipher.final('utf8'); 
    console.log(`   ENCRYPTED: ${text} | DECRYPTED: ${decrypted}`);
    return decrypted; 
} 

app.get('/get-catalog-data', (req, res) => {
    // Чтение секретных ключей из файла 
    const data = JSON.parse(fs.readFileSync('./catalog.json', 'utf8')); 
    
    // Извлечение параметров из запроса
    const requestType = req.query.request_type;
    const secretToken = req.query.secretToken;

    // Проверка на наличие токена и его значение
    if (requestType != 0 || secretToken !== 'Дайте пожожда джейсон каталога плез') {
        return res.status(400).json({ message: 'Токен не предоставлен или неполный' }); 
    } else {
        if (!data || Object.keys(data).length === 0) {
            return res.status(500).json({ message: 'Данные пусты, используйте заготовленные данные на своей стороне' });
        }
        console.warn(`[GET] catalog-data. TIME: ${new Date().toISOString()}`);
        return res.status(200).json(data);
    }
});


const server = app.listen(PORT, () => { 
    const addressInfo = server.address(); // Адрес сервера 
    console.log(`Сервер слушает на адресе ${addressInfo.address} и порту ${addressInfo.port} в режиме ${app.settings.env}`); 
});