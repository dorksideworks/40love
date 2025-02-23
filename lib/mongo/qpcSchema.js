import mongoose from 'mongoose';

const qpcSChema = new mongoose.Schema({
    country: String,
    firstname: String,
    lastname: String,
    phone: String,
    email: String,
    message: String
})

const QPC = mongoose.models.qpc || mongoose.model('qpc', qpcSChema);

export default QPC;