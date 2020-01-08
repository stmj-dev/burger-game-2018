/** 

write your code here
for page order.innerHTML

**/

let list = [];
let price = 0;
let detail = document.getElementById('detail');
let total = document.getElementById('total');

// console.log(total.innerHTML);


list = JSON.parse(window.localStorage.getItem('list'));

console.log(list);


list.forEach((key) => {
	let data = getItem(key.pesanan);
	console.log(data);
	price = price + data.cost;
	let tr = "<tr><td>"+data.name+"</td><td>$"+data.cost+"</td></tr>";

	detail.innerHTML += tr;
	// console.log(detail);
});

let trtotal = "<tr><td>Total</td><td>$"+price+"</td></tr>";


total.innerHTML = trtotal;



