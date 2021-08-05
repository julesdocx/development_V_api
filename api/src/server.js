const express = require('express')
const bodyParser = require('body-parser');
const http = require('http');
const Helpers = require('./utils/helpers.js')

const port = 3000


const app = express();
http.Server(app); 


// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     // to support URL-encoded bodies
//     extended: true
//   })
// );  

// app.get('/test', (req, res) => {
  
//   res.status(200).send();
// })

// app.get('/', async (req, res) => {
//   const result = await pg
//     .select(['uuid', 'title', 'created_at'])
//     .from('story')
//   res.json({
//       res: result
//   })
// })

// app.get('/story/:uuid', async (req, res) => {
//   const result = await pg
//     .select(['uuid', 'title', 'created_at'])
//     .from('story')
//     .where({uuid: req.params.uuid})
//   res.json({
//       res: result
//   })
// })

// /**     ///////////// GET ALL RECORD /////////////    */

// app.get('/storyblock', async (req, res) => {
//   const result = await pg.select(['uuid', 'content', 'story_id', 'created_at']).from('storyblock')
//   res.json({
//       res: result
//   })
// })

// /**     ///////////// GET RECORD BY UUID /////////////    */

// app.get('/storyblock/:uuid', async (req, res) => {

// // GET
// // record
// // met UUID

// })

// /**     ///////////// ADD RECORD /////////////    */

// app.post('/addstoryblock/', async (req, res) => {

// // ADD
// // record

// })

// /**     ///////////// DELETE RECORD /////////////    */
// app.delete('/storyblock/', async (req, res) => {

// // Delete
// // record
// // met UUID

// })

// async function initialiseTables() {
//   await pg.schema.hasTable('storyblock').then(async (exists) => {
//     if (!exists) {
//       await pg.schema
//         .createTable('storyblock', (table) => {
//           table.increments();
//           table.uuid('uuid');
//           table.string('content');
//           table.string('story_id');
//           table.integer('order');
//           table.timestamps(true, true);
//         })
//         .then(async () => {
//           console.log('created table storyblock');
//         });

//     }
//   });
//   await pg.schema.hasTable('story').then(async (exists) => {
//     if (!exists) {
//       await pg.schema
//         .createTable('story', (table) => {
//           table.increments();
//           table.uuid('uuid');
//           table.string('title');
//           table.string('summary');
//           table.timestamps(true, true);
//         })
//         .then(async () => {
//           console.log('created table story');
//           for (let i = 0; i < 10; i++) {
//             const uuid = Helpers.generateUUID();
//             await pg.table('story').insert({ uuid, title: `random element number ${i}` })
//           }
//         });
        
//     }
//   });
// }
//initialiseTables()

module.exports = app;