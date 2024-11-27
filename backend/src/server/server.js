import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import {createFeaTypeApplication} from './createFeaTypeApplication.js'
import {createSwiftTypeApplication} from './createSwiftTypeApplication.js'
import {createCashTypeApplication} from './createCashTypeApplication.js'

dotenv.config();

export const app = express()

const corsOptions = {
    origin: ['http://localhost:80', 'https://localhost:443', 'http://localhost:5173'],
    methods: ['POST'],
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())

app.post('/new', async (req, res) => {
    try {
        const data = req.body;
        let result;
        
        switch(data.type) {
            case 'fea':
                result = await createFeaTypeApplication(req);
                break;
            case 'swift':
                result = await createSwiftTypeApplication(req);
                break;
            case 'cash_exchange':
            case 'cash_withdrawal':
                result = await createCashTypeApplication(req);
                break;
            default:
                throw new Error('Invalid application type');
        }

        console.log(result)
        
        res.status(200).json({ 
            success: true,
            id: result.insertId
        });

    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Internal server error' 
        });
    }
})