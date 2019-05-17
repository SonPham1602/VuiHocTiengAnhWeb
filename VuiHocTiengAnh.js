
$(document).ready(function(){
	$.get('https://sonpham1602.github.io/VuiHocTiengAnhWeb/data/Units/data.txt', function(data) {
		var o = new Option("data", "value");
/// jquerify the DOM object 'o' so we can use the html method
	
$(o).html("abc");
$(".test").append(o);
}, 'text');
	

});
