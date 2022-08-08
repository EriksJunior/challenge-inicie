import 'dotenv/config'
import app from './app'

app.listen(process.env.PORT, () =>{
  console.log(`server running in http://localhost:${process.env.PORT}`)
})

