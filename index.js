const express = require('express');
const foodRouter = require('./routes/restro.js');
const PORT = 3000;
 
const app = express();
app.use(express.json());
app.use("/api/foods",foodRouter);
// //Defining routes
// app.get('/', (req, res) => {
//   res.status(200).send({ id: 1 });
// });
// app.get('/greet', (req, res) => {
//   res.send({ msg: 'Hello Everyone! Good Mornings' });
// });
// app.get('/search', (req, res) => {
//   const query = req.query.id;
//   console.log(query);
// });
// app.get('/greet/:name', (req, res) => {
//   const name = req.params.name;
//   res.send({ msg: `Hello ${name}! Good Morning` });
// });
// //POST METHOD
// app.post('/courses', (req, res) => {
//   const course = req.body;
//   console.log(course);
//   res.send(course);
// });

app.listen(PORT, () => console.log('Server is running on PORT 3000'));