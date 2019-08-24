var mysql = require ('mysql');
var inquirer = require('inquirer');



var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Mysql.2019',
    database: 'bamazon_db',
});

connection.connect(function(err){
    if(err){
        throw err;
    }

    connection.query("SELECT * FROM products", function(err,res){
        if(err) throw err;
        for (var i=0; i<res.length; i++) {
        console.log("Item ID: " + res[i].item_id + "," + "| Department: " 
        + res[i].department_name +  "| Product: " + res[i].product_name + "," + " $" + res[i].price + "   | Stock Quantity:  " + res[i].stock_quantity);
        }
        start(res);
    });
});

function start (results) { 
// console.log (results)
  
    inquirer.prompt([
        {
        
            type: "list",
            name: "selectItemID",
            message: "What is the Item ID of the product you would like to buy?",
            choices: function() {
                var choiceArrayItemId = [];
                for (var i = 0; i < results.length; i++) {
                  choiceArrayItemId.push(results[i].item_id.toString());
                }
                return choiceArrayItemId;
            }
        },
        {
            type: "input",
            name: "selectNumUnits",
            message: "How many would you like to buy?"
        }
    ])
    
    .then (function(answer){
        CheckUnits(answer.selectItemID, answer.selectNumUnits);
    });     
};

function updateUnits(itemID, NumUnits, stock_quantity){
    console.log(" Updating units");
    var query = connection.query(
        `UPDATE products SET stock_quantity = ${stock_quantity-NumUnits} WHERE ${itemID} = item_id`, function(err, results){
            if (err){
                throw err;
            }
            console.log("Your order has been placed successfully!");
        }
    )
}

function CheckUnits(ItemID, NumUnits){


  connection.query(`SELECT stock_quantity FROM products WHERE ${ItemID} = products.item_id`, function(err, results) {
  
    if (err){
        throw err;
    }
    else if (parseInt(NumUnits)> results[0].stock_quantity) {
    return console.log ("Insufficient quantity - cannot complete your order.")
        start();
        }
    else if (parseInt(NumUnits) <= results[0].stock_quantity) {


    updateUnits(ItemID, NumUnits, results[0].stock_quantity);
    connection.end();
    };
    })
}