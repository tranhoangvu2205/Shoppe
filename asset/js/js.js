var arr=[
    'tran',
    'hoang',
    'vu'
];
var oj={
    name:'vu',
    age:'21'
    
};
var funtion=function(){
    alert('vu');
};
var mystring='tran hoang hoang vu';
// dem do dai
console.log(mystring.length);
// tim ki tu
console.log(mystring.indexOf('hoang',5));
//cat ky tu
console.log(mystring.slice(5,10));
//chen chuoi
console.log(mystring.replace(/hoang/g,'anh'));
//chen het
console.log(mystring.replace(/n/g,'a'));
//chu hoa
console.log(mystring.toUpperCase());
//bo khoang trang thua
console.log(mystring.trim());
//cat chuoi thanh array
console.log(mystring.split(' '));
//lay ky tu
console.log(mystring.charAt(1));