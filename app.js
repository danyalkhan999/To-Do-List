const express = require('express');

const db = require('./config/mongoose')

//import schema for the ToDo List
const ToDo = require('./models/todo');

//using express
const app = express();
// port at which server will listen
const port = 5000;

// app using static files
app.use(express.static("./views"));

// to use encrypted data
app.use(express.urlencoded({extended: true}));

// setup the view engine

app.set('view engine', 'ejs');

app.set('views', './views');




app.get("/", (req, res) => {
    ToDo.find({}, (err, todo) => {
        if(err){console.log(e.message); return;}

        return res.render('home', {
            task: todo
        });
    })
});


// create tasks
app.post('/create-task', (req, res) => {
    // creating task

    ToDo.create( {
        description: req.body.description,
        category: req.body.category,
        date: req.body.date,
    }, (e, newTask) => {
        if(e){console.log(e.message); return;};

        return res.redirect('/');
    });
});


// delete tasks

app.get('/delete-task', (req, res) => {
    // get the id
    var id = req.query;

    // check thew number of tasks
    var count = Object.keys(id).length;
    
    for(let i=0; i<count; i++){
        // find and delete task
        ToDo.findByIdAndDelete(Object.keys(id)[i], (err) => {
            if(err) {
                console.log('erroris delete tasks');
            }
        })
    }

    return res.redirect('/');
});





// server configuration 
app.listen(port, (e) => {
    if(e) {
        console.log(e.message);
        return;
    }
    console.log("Sever is running on port: "+ port);
})