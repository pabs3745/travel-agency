import { Travel } from "../models/travel.js";
import { Comments } from "../models/comments.js";

const pageHome = async(req, res) => {
    // get 3 travels from the model Travel
    const promiseDB = [];
    promiseDB.push(Travel.findAll( { limit: 3 } ));
    promiseDB.push(Comments.findAll( { limit: 3 } ));
    try {
        const result = await Promise.all(promiseDB);
        res.render('home', {
            page: "Home",
            clase: 'home',
            travels: result[0],
            comments: result[1]
        });
    } catch (error) {
        console.log(error)
    }
};

const pageAbout = (req, res) => {
    res.render('aboutus', {
        page: "About us"
    });
};

const pageTravels = async (req, res) => {
    // Get db
    const travels = await Travel.findAll();

    res.render('travels', {
        page: "All flights",
        travels,
    });
};

// Show travel by slug
const pageDetailTravel = async (req, res) => {
    const { slug } = req.params;

    try {
        const travel = await Travel.findOne( { where: { slug: slug }});
        res.render('travel', {
            page: 'Travel info',
            travel
        })
    }
    catch(error){
        console.log(error)
    }
}

const pageComments = async (req, res) => {
    try {
        const comments = await Comments.findAll();
        res.render('comments', {
            page: "Leave a comment for us",
            comments
        })
    }
    catch(error) {
        console.log(error)
    }
    
};

export {
    pageHome,
    pageAbout,
    pageTravels,
    pageDetailTravel,
    pageComments
}