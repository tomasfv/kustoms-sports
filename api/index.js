const server = require('./src/app.js');
const { conn } = require('./src/db.js');


const {Products} = require('./src/db.js');
const { products } = require( './src/bulk/products.json' );


conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || 3001, () => {
    console.log('%s listening at 3001'); 

     const bulkCharge = async function () {
      let bulkState = await Products.findAll();
      console.log("bulkState:",bulkState)
      console.log("bulkState.length:",bulkState.length)
      if ( bulkState.length === 0 ) {await Products.bulkCreate( products )}
      }
      bulkCharge();

  });
});
