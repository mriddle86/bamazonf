var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: "Oak04k88",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  beginOrder();
});

function beginOrder() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) {
    	throw err;
    }

    for (var i = 0; i < res.length; i++) {
      console.log(
        "ID: " +
          res[i].item_id +
          " || Product: " +
          res[i].product_name +
          " || Price: " +
          res[i].price
      );
    }

    inquirer
    .prompt([{
      name: "idInput",
      type: "input",
      message: "enter product ID",
      },
      {
      name: "order",
      type: "input",
      message: "enter product quantity",
      }
      ])
    .then(function(answer) {
        var chosenProduct = (answer.idInput)-1;
        var chosenQuantity = parseInt(answer.order);
        var totalCost = parseFloat(((res[chosenProduct].price)*chosenQuantity).toFixed(2));
      
      if (parseInt(res[chosenProduct].stock_quantity) >= chosenQuantity) {
      	connection.query(
      		"UPDATE products SET ? WHERE ?",
      		[
        {stock_quantity: (parseInt(res[chosenProduct].stock_quantity) - chosenQuantity)},
        {Item_ID: answer.idInput}
        ],
      function(error) {
              if (error) throw err;

            }
          );
      console.log("your order total is $" + totalCost)
      } 
      else {
      	console.log("Insufficient quantity")
      }

      });
    

  });
};

