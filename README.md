# Node.js & MySQL
Bamazon

Bamazon is an Amazon-like storefront which utilizes MySQL and node.js. The app will take in orders from customers and deplete stock from the store's inventory.

## Challenge #1: Customer View:<h2>

1. Create a MySQL Database called bamazon.
2. Then create a Table inside of that database called products.
3. The products table should have each of the following columns:

    1. item_id (unique id for each product)
    2. product_name (Name of product)
    3. department_name
    4. price (cost to customer)
    5. stock_quantity (how much of the product is available in stores)



Running 'bamazonCustomer.js` will first display all of the items available for sale. This will include the ids, names, prices of products for sale and the stock quantity.
The app will prompt users with two messages.
1. The first will ask for the ID of the product that they would like to buy.
2.  The second message will ask how many units of the product they would like to buy.
 
 Once the customer has placed the order, the application will check if the store has sufficient product items to meet the customer's request. It will also update the stock quantity.

![StoreFront](/images/image2.png)



If not, the app will log the phrase Insufficient quantity!, and prevent the order from going through.

![StoreFront](/images/image3.png)


# Packages Utilized

1. Node.js
2. Inquire NPM Package (https://www.npmjs.com/package/inquirer)
3. MYSQL NPM Package (https://www.npmjs.com/package/mysql)




*Author:*
Saranda Sharpe
