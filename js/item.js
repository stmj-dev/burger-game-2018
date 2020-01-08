

function item (id, name, cost) {
 	this.id = id;
	this.name = name;
	this.cost = cost;
}

function getItem(id){
	return itemList[id];
}

var itemList = [];

// set the function item(itemID, itemName, itemCost) 
itemList[0] = new item ('0', 'Top Bread', 1);
itemList[1] = new item ('1', 'Bottom Bread', 1);
itemList[2] = new item ('2', 'Vegetable', 0.5);
itemList[3] = new item ('3', 'Beef', 5);
itemList[4] = new item ('4', 'Egg', 2);
itemList[5] = new item ('5', 'Tomato', 1);
itemList[6] = new item ('6', 'Cheese', 2);
itemList[7] = new item ('7', 'Onion', 1);
itemList[8] = new item ('8', 'pickle', 1);