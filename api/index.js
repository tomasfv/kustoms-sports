const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {Products, Users} = require('./src/db.js');
const {products} = require( './src/bulk/products.json' );


conn.sync({ force: false}).then(() => {
  server.listen(process.env.PORT || 3001, () => {
    console.log('%s listening at 3001'); 

     const bulkCharge = async function () {
        //carga de productos
        let allProducts = await Products.findAll();
        console.log("Productos existentes: ",allProducts.length)
        if ( allProducts.length === 0 ) {
          console.log("Cargando productos...")
          await Products.bulkCreate( products )
          console.log("Productos cargados!")
        }

        //cargo usuario admin
        let user = await Users.findOne({
          where: { email: "KustomsSports@gmail.com" },
        });
        // console.log(user)
        if (user === null) {
          let nickname = "KustomsSports"
          let name = "KustomsSports"
          let email = "KustomsSports@gmail.com"
          let profile = "Admin"
          const createuser = await Users.create({
              nickname,
              name,
              email,
              profile
          })
        }
      }
      bulkCharge();

  });
});
