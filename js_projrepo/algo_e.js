var main = function(){
	var a = 13, b=8;
	var result = gcd(a,b);
	console.log("Result is "+result);
}

function gcd(num1,num2){
	
		var rem = num1%num2;
		if(rem == 0){
			return num2;
		}
		else{
			return gcd(num2,rem);
		}

};

if(require.main === module){
	main();
}

