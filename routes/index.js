import express from 'express';
import { pageHome, 
        pageAbout, 
        pageTravels, 
        pageComments, 
        pageDetailTravel
    } from '../controlers/pagesController.js';
import { saveComment } from '../controlers/commentsController.js';

const router = express.Router();

router.get('/', pageHome);

router.get('/about', pageAbout);

router.get('/travels', pageTravels);
router.get('/travels/:slug', pageDetailTravel);

router.get('/comments', pageComments);
router.post('/comments', saveComment);


export default router;
