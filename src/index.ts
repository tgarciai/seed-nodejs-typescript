import app from './App'
import * as process from 'process'

const port = process.env.PORT || 3000

app.listen(port, (err) => {
    if (err) {
        return console.log(err)
    }

    return console.log(`server is listening on ${port}`)
})