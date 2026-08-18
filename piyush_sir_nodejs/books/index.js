import express from 'express'
import { books } from './books.js'

const app = express()

const port = 8000

app.use(express.json())

//get all books
app.get('/book', (req, res) => {

    return res.status(200).json({
        message: books
    })

})


// get books by id
app.get('/book/:id', (req, res) => {

    const { id } = req?.params

    if (isNaN(id)) {
        return res.status(400).json({
            error: "invalid id , please provide valid id here"
        })
    }
    const singleBook = books.find((items) => items.id == id)
    if (!singleBook) {
        return res.status(404).json({
            error: 'book not found'
        })
    }
    return res.status(200).json({
        message: singleBook
    })

})


// add a book 

app.post('/book', (req, res) => {
    const data = req?.body
    const addedData = [books, data]
    return res.status(201).json({
        message: 'book added',
        data: addedData
    })
})

// delete the book


app.post('/book/:id', (req, res) => {
    const { id } = req?.params
    const singleBook = books.filter((items) => items.id !== Number(id))
    return res.status(200).json({
        message: singleBook
    })
})

app.listen(port, () => {
    console.log(`server is listing  on port ${port}`)
})