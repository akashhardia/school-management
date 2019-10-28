// import { app } from 'express'
import Express from 'express'
const app = Express()

app.get('/', () => {
  console.log('Home Page')
})

app.listen(3000, () => {
  console.log('Server started')
})
