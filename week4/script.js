var names= new Array()
names[0]="james";
names[1]="Jack";
names[2]="willams";
names[3]="jake";
names[4]="anderson";
names[5]="ben";
names[6]="yakoov";
names[7]="harry";
names[8]="jhonson";
for (var i=0;i<names.length;i++){
	if (names[i].charAt(0)==="j"||names[i].charAt(0)==="J"){
		console.log("Goodbye"+names[i])
	}
	else{
	console.log("Hello"+names[i])
}
}
