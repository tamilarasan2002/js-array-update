var a=parseInt(prompt("main array length"));
var main=new Array(a);
for(i=0 ;i<a;i++){
	main[i]=parseInt(prompt("Enter array value"));
}
document.write(main); 

var ind;
ind=parseInt(prompt("main array index value"));
main[ind]=parseInt(prompt("main array new value"));
document.write("<br>"+  main); 

