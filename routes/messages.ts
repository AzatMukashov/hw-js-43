import express from "express";
import {promises as fs} from 'fs';
import path from 'path';
const router = express.Router();
const messagesDir = path.join(__dirname, '../messages');