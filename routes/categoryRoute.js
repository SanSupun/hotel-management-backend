import express from 'express';
import {createCategoryItems, getCategoryItems} from '../controllers/categoryItemController.js'

const categoryRouter = express.Router();

categoryRouter.post("/",createCategoryItems)

export default categoryRouter; 