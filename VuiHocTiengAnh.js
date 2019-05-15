
$(document).ready(function(){
	$.get('https://sonpham1602.github.io/VuiHocTiengAnhWeb/data/Units/data.txt', function(data) {
		var o = new Option("option text", "value");
/// jquerify the DOM object 'o' so we can use the html method
$(o).html("option text");
$(".test").append(o);
}, 'text');


});
