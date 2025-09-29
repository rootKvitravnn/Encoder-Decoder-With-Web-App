function ahem()
 {
	str1 = '4561737465722031322069732054484d7b68316464336e5f6a355f66316c337d'
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
    console.log(str)
	return str;
 }
ahem()