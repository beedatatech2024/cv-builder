const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const authRouters = require('./routes/authRoutes');
const cvRouters = require('./routes/cvRoutes');

dotenv.config();
const app = express();
app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors());
app.use(bodyParser.json());
app.use('/api', authRouters);
app.use('/api', cvRouters)



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
