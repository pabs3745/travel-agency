import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {
        page: "Home"
    });
});

router.get('/about', (req, res) => {
    const travels = 'Flight to Germany';
    res.render('aboutus', {
        page: "About us"
    })
});

router.get('/travels', (req, res) => {
    res.render('travels', {
        page: "All flights"
    })
});

router.get('/comments', (req, res) => {
    res.render('comments', {
        page: "What they say about us"
    })
});


export default router;
