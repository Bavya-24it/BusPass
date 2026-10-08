
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
    'mongodb://user_45573twrq:p45573twrq@db01.dbhost.dev:5050/db_45573twrq')
    .then(() => console.log("Mongoose Connected Successfully"))
    .catch(err => console.log("Error",err));

const busPassSchema = new mongoose.Schema({
    studentName: String,
    registerNumber: String,
    busRoute: String,
    mobileNumber: String
});

const BusPass = mongoose.model("BusPass", busPassSchema);

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/buspass', async (req, res) => {
    try {
        const { studentName, registerNumber, busRoute, mobileNumber } = req.body;
      
        const busPass = new BusPass({
            studentName,
            registerNumber,
            busRoute,
            mobileNumber
        });

        await busPass.save();
        res.send("Bus Pass Application Submitted Successfully");
    } catch (error) {

        res.status(500).send("Error submitting application");
    }
});

app.get('/buspasses', async (req,res) => {
    const data = await BusPass.find();
    res.json(data);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});