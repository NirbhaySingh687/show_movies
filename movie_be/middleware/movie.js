import fs from "fs"

export const getMovies = (req, res, next) => {
    try {
        fs.readFile("./movie.json", "utf-8", (err, jsonString)=> {
            if(err) {
                next(err);
            }
            res.send(JSON.stringify(JSON.parse(jsonString)))
        })
    } catch (err) {
        next(err)
    }
}

export const createMovies = (req, res, next) => {
    try {
        res.send("connected")
    } catch (err) {
        next(err)
    }
}