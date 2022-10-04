const { Router } = require("express");
const { Users, Carts, Products } = require("../db.js");

const router = Router();

router.post("/", async (req, res) => {
  let { email, id } = req.body;
  console.log(req.body)
  try {
    const finduser = await Users.findOne({
      where: { email: email },
    });
    if (!finduser) return res.status(400).send("User is not found");

    const product = await Products.findByPk(id);
    if (product.available === false)
      return res.status(400).send("Product is not found");
    const preciototal = product.price;
    console.log(preciototal);
    console.log(finduser);

    let cart = await Carts.findOne({
      where: { userId: finduser.id, open: "true" },
      include: {
        model: Users,
        model: Products
      },
    });

    console.log(cart);
    if (cart === null) {
      cart = await Carts.create({
        totalamount: 0,
      });
      console.log(cart);
    }

    finduser.addCarts(cart);

    let pricepromotion = Number.parseFloat(
      parseInt(cart.totalamount) +
        (product.promotion
          ? parseInt(product.price) * (1 - parseInt(product.promotion))
          : parseInt(product.price))
    ).toFixed(2);
    console.log(cart)
    let repeatedProduct = []
    if (Object.hasOwn(cart.dataValues, 'products')){
      repeatedProduct = cart.dataValues.products.filter((el) => el.id === id);
    }
		if (repeatedProduct.length > 0) {
			return res.status(200).send(`${product.name} is already in the cart`)
    }else{
      cart.addProducts(product);
      await cart.update({
        totalamount: pricepromotion,
      });
    }
    console.log(cart)
    return res.status(200).send("Se agrego el producto");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
