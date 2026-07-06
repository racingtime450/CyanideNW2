const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const USERS_FILE = path.join(__dirname, 'users.txt');

app.use(express.json());
app.use(express.static(__dirname));

function readUsers() {
  if (!fs.existsSync(USERS_FILE)) return [];

  const content = fs.readFileSync(USERS_FILE, 'utf8').trim();
  if (!content) return [];

  return content.split('\n').map(line => {
    const [username, email, password, timestamp] = line.split('|');
    return { username, email, password, timestamp };
  });
}

app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Tüm alanları doldurun.'
    });
  }

  const users = readUsers();

  if (
    users.some(
      u => u.username.toLowerCase() === username.toLowerCase()
    )
  ) {
    return res.status(400).json({
      success: false,
      message: 'Bu kullanıcı adı zaten alınmış.'
    });
  }

  const timestamp = new Date().toISOString();

  fs.appendFileSync(
    USERS_FILE,
    `${username}|${email}|${password}|${timestamp}\n`
  );

  res.json({
    success: true,
    message: 'Kayıt başarılı!'
  });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const user = readUsers().find(
    u =>
      u.username.toLowerCase() === username.toLowerCase() &&
      u.password === password
  );

  if (!user) {
    return res.status(401).json({
      success: false,
      message: 'Kullanıcı adı veya şifre hatalı.'
    });
  }

  res.json({
    success: true,
    user
  });
});

app.get('/api/recent-users', (req, res) => {
  const users = readUsers();

  res.json({
    total: users.length,
    users: users.slice(-5).reverse()
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: ${PORT}`);
});
