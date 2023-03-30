import { Comments } from "../models/comments.js";

const saveComment = async (req, res) => {
    console.log(req.body);

    // Validate
    const { nombre, correo, mensaje} = req.body;
    const errores = [];

    if(!nombre){
        // console.log("This field is empty")
        errores.push({mensaje: 'Name is empty'})
    }
    if(!correo){
        // console.log("This field is empty")
        errores.push({mensaje: 'email is empty'})
    }
    if(!mensaje){
        // console.log("This field is empty")
        errores.push({mensaje: 'Message is empty'})
    }

    if(errores.length > 0) {
        // Get current comments
        const comments = await Comments.findAll();
        res.render('comments', {
            page: "Leave a comment for us",
            errores,
            nombre,
            correo,
            mensaje,
            comments
        })
    } else {
        // Save to db
        try {
            await Comments.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/comments');
        }
        catch(error){
            console.log(error)
        }
    }
}

export {
    saveComment
}