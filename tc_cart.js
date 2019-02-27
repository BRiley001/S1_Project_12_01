"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Brenden Riley
   Date:   2.27.19
   
   Filename: tc_cart.js
	
*/
// The orderTotal starts at 0
var orderTotal = 0;

//The cartHMTL will be created and includes the text string below
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> </tr>";

// The for loop will continue for as long as the length of the item array, increasing by one, starting a 0
for (var i = 0; i < item.length; i++) {
    // The cartHTML will update with the item number
    cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
    // The cartHTML will change with the item description, price, and quantity of that item.
    cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td> " + itemQty[i] + "</td>";
    // the itemscost will be the price multiplied by the quantity
    var itemCost = itemPrice[i] * itemQty[i];
    // The cartHMTL will update based on the itemCost form above
    cartHTML += "<td>$" + itemCost + "</td></tr>"
    // the total order cost will be adding the previous number
    orderTotal += itemCost;
}

//The cartHTML will update bases on the total cost of the order
cartHTML += "<tr><td colspan='4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>";

//The document will change to include all the changes from above, and change the div with cart as its id to the cartHTML
document.getElementById("cart").innerHTML = cartHTML;