const express = require('express');
const app = express()
const PORT = 3000
const cors = require('cors');
const db = require('./models');

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('/movies', (req,res,next)=>{
    db.Movies.findAll({
        include : [{
            model : db.Ratings
        }]
    })
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        console.log(err)
    })
})

app.get('/movies/:id', (req,res,next)=>{
    db.Movies.findAll({
        where : {
            id : req.params.id
        }
    })
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        console.log(err)
    })
})

app.put('/movies/:id', (req,res,next)=>{
    db.Movies.update({
        title : req.body.title,
        year : req.body.year,
        type : req.body.type,
        poster : req.body.poster
    },{
        where : {
            id : req.params.id
        }
    })
    .then(response => {
        db.Movies.findAll({
            where : {
                id : req.params.id
            }
        })
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            console.log(err)
        })
    })
    .catch(err => {
        console.log(err)
    })
})

app.post('/rates/:MoviesId', (req,res,next)=>{
    let MoviesId = Number(req.params.MoviesId)
    db.Ratings.create({
        reviewer : req.body.reviewer,
        point : req.body.point,
        MoviesId
    })
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        next(err)
    })
})

app.delete('/rates/:id', (req,res,next)=>{
    db.Ratings.destroy({
        where : {
            id : req.params.id
        }
    })
    .then(response => {
        res.status(200).json({message : 'Delete rate success'})
    })
    .catch(err => {
        next(err)
    })
})



app.use((err,req,res,next)=> {
    if(err.name === 'SequelizeValidationError'){
        let errors = []
        let message = " "
        err.errors.forEach(error => {
            errors.push(error)
            message += error.message+', '
        });
        res.status(400).json({
            errors,
            message
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});