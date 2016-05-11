console.log("hello homework3");
function stringToInt(input){
    input.a = "1234";
    input.b = "123.456";
    input.c = "invalid one";
    input.d = "-5678";
    return parseInt(input);
}function maskNumber(mask_number){
    if (mask_number == undefined || mask_number === '') {
		return '';
	}
	var pattern = /.{4}$/;
	return mask_number.replace(pattern, "****");
}function getAverage(array){
    var num = new Array(1,5,10,4,-4,11);
    var sum = 0.0;
    for (var i = 0; i<array.length; i++)
        sum += array[i];
    return sum / array.length;
}function isMultipleSeven(i) {
    var num = new Array(5, 21, 100);
    var result = Boolean(i%7==0);
    if(i%7==0) {
        true;
    } else {
        false;
    }
    return result;
}function operation() {
    var a=24;                  
	var b=8;
	var add = "a+b"
	var subtract = "a-b"
	var Multiply = "a*b"
	var devide = "a/b"
	return ;
    function first_arg(a,b) {
        
    }
    function second_arg() {
        
    }
    function third_arg() {
        
    }
}function triangleMtn() {
    var num=10;
    var output= " ";
    for (var i = 1; i <= num; i++) {
        output += "*" ;
        console.log(output);
        }
    return;
}
