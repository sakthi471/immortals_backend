const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

const userRoutes = require('./src/routes/userRoutes');
const imgRoutes = require('./src/routes/imgRoutes');

const connectDB = require('./src/utils/dbConnect');

app.use(express.json());

app.use(cors({
    origin: "*"
}));


app.use('/user', userRoutes);
app.use('/img',imgRoutes);

// Start the server
connectDB().then(result => {
    console.log("DB Connected");
    app.listen(PORT, async() => {
        console.log(`Server is running on port ${PORT}`);
    });  
}).catch(err => {
    console.log(" Database  Error");
})