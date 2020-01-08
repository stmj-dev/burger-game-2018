// initialize variable
let num = 100;
let price = 0;
let list = [];

$(document).ready(function(){
	$("img#2").parent(".slide").css("display", "block").addClass("act");
	$("table#detail").html("<tr>");
	$("table#detail").find("tr").text(item());
	var topp = "<img src='img/bread-top.png'>";
	var bott = "<img src='img/bread-bottom.png'>";
	$("#order").html(bott+topp);
	// $(".slide").click(function(){
	// 	var src = $(this).find("img").attr("src");
	// 	var data = $("#order").html();
	// 	var im = "<img src='"+src+"'>";
	// 	$("#order").html(data+im);
	// }).promise().done(function(){
	// 	var rw = $("#order").html();
	// 	$("#order").html(rw+topp);
	// });
	
});

function prev(){
	if($("img#2").parent(".slide").hasClass("act")){
		$("img#8").parent(".slide").css("display", "block").addClass("act");
		$("img#2").parent(".slide").css("display", "none").removeClass("act");
		
	}
	
	else if($("img#8").parent(".slide").hasClass("act")){
		$("img#7").parent(".slide").css("display", "block").addClass("act");
		$("img#8").parent(".slide").css("display", "none").removeClass("act");
	}
	
	else if($("img#7").parent(".slide").hasClass("act")){
		$("img#6").parent(".slide").css("display", "block").addClass("act");
		$("img#7").parent(".slide").css("display", "none").removeClass("act");
	}
	
	else if($("img#6").parent(".slide").hasClass("act")){
		$("img#5").parent(".slide").css("display", "block").addClass("act");
		$("img#6").parent(".slide").css("display", "none").removeClass("act");
	}
	
	else if($("img#5").parent(".slide").hasClass("act")){
		$("img#4").parent(".slide").css("display", "block").addClass("act");
		$("img#5").parent(".slide").css("display", "none").removeClass("act");
	}
	
	else if($("img#4").parent(".slide").hasClass("act")){
		$("img#3").parent(".slide").css("display", "block").addClass("act");
		$("img#4").parent(".slide").css("display", "none").removeClass("act");
	}
	
	else if($("img#3").parent(".slide").hasClass("act")){
		$("img#2").parent(".slide").css("display", "block").addClass("act");
		$("img#3").parent(".slide").css("display", "none").removeClass("act");
	}
}

function next(){
	if($("img#2").parent(".slide").hasClass("act")){
		$("img#3").parent(".slide").css("display", "block").addClass("act");
		$("img#2").parent(".slide").css("display", "none").removeClass("act");
	}
	
	else if($("img#3").parent(".slide").hasClass("act")){
		$("img#4").parent(".slide").css("display", "block").addClass("act");
		$("img#3").parent(".slide").css("display", "none").removeClass("act");
	}
	
	else if($("img#4").parent(".slide").hasClass("act")){
		$("img#5").parent(".slide").css("display", "block").addClass("act");
		$("img#4").parent(".slide").css("display", "none").removeClass("act");
	}
	
	else if($("img#5").parent(".slide").hasClass("act")){
		$("img#6").parent(".slide").css("display", "block").addClass("act");
		$("img#5").parent(".slide").css("display", "none").removeClass("act");
	}
	
	else if($("img#6").parent(".slide").hasClass("act")){
		$("img#7").parent(".slide").css("display", "block").addClass("act");
		$("img#6").parent(".slide").css("display", "none").removeClass("act");
	}
	
	else if($("img#7").parent(".slide").hasClass("act")){
		$("img#8").parent(".slide").css("display", "block").addClass("act");
		$("img#7").parent(".slide").css("display", "none").removeClass("act");
	}
	
	else if($("img#8").parent(".slide").hasClass("act")){
		$("img#2").parent(".slide").css("display", "block").addClass("act");
		$("img#8").parent(".slide").css("display", "none").removeClass("act");
	}
}

function orderC(){
	let uwu = window.location.href;
	console.log(uwu);
	uwu = uwu.replace('index.html','order.html');
	window.localStorage.setItem('list',JSON.stringify(list));
	window.location.href = uwu;
	// console.log(uwu);
}





function drag(ev){
	ev.dataTransfer.setData('id',ev.target.id);
}

function drop(ev){
	num = num + 1;

	let total = $('#total');
	let target = $('#order');
	let table = $('#detail');

	var topp = "<img src='img/bread-top.png'>";
	var bott = "<img src='img/bread-bottom.png'>";

	let id = ev.dataTransfer.getData('id');

	list.push({id: num,pesanan: id});


	target.empty();
	total.empty();
	table.empty();
	price = 0;

	target.append(bott);

	list.forEach((key) => {
		let src = $('#'+key.pesanan)[0].src;

		let img = '<img src="'+src+'" id="'+key.id+'" ondragstart="drag(event)" draggable="true" data-pesanan="'+key.pesanan+'">';

		let dataItem = getItem(key.pesanan);
		price = price +dataItem.cost;

		let tr = "<tr><td>"+dataItem.name+"</td><td>$"+dataItem.cost+"</td></tr>";

		table.append(tr);

		target.append(img);
	});

	let trtotal = "<tr><td>Total</td><td>$"+price+"</td></tr>";

	total.append(trtotal);
	target.append(topp);


}


function deleteItem(ev){
	let target = $('#order');
	let total = $('#total');
	let table = $('#detail');

	var topp = "<img src='img/bread-top.png'>";
	var bott = "<img src='img/bread-bottom.png'>";

	let id = ev.dataTransfer.getData('id');
	let barang = document.getElementById(id);


	let calonHapus = list.find(function(l){
			if(l.id == id){
				return l;
			}
	});
	// console.log({id: id,pesanan: barang.getAttribute('data-pesanan')});
	list.splice(list.indexOf(calonHapus),1);

	table.empty();
	target.empty();
	total.empty();
	price = 0;

	target.append(bott);



	list.forEach((key) => {
		let src = $('#'+key.pesanan)[0].src;
		let img = '<img src="'+src+'" id="'+key.id+'" ondragstart="drag(event)" draggable="true">';
		let dataItem = getItem(key.pesanan);

		price = price + dataItem.cost;
		let tr = "<tr><td>"+dataItem.name+"</td><td>$"+dataItem.cost+"</td></tr>";

		table.append(tr);

		target.append(img);
	});

	console.log(price);
	let trtotal = "<tr><td>Total</td><td>$"+price+"</td></tr>";

	total.append(trtotal);


	target.append(topp);
}








































