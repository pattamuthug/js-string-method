let text = "abcdefghijklmnopqrstuvexyz";
let length = text.length;
console.log(length);
let slice = text.slice(7,15);
console.log(slice);
let slice1 = text.slice(-12,-6);
console.log(slice1);
let sub = text.substring(15,7);
console.log(sub);
let text1 = "welcome to tirunelveli and tirunelveli";
let replace = text1.replace(/tirunelvELI/i,"tenkasi")
console.log(replace);
let replace1 = text1.replace(/tirunelveli/g,"tenkasi");
console.log(replace1);
let text2 = "tirunelveli";
let text3 = text2.toUpperCase();
console.log(text3);
let text4 = "TIRUNELVELI";
let text5 = text4.toLowerCase();
console.log(text5);
let text6 = "Hello";
let text7 = text6.concat("","Everyone")
console.log(text7);
let text8 = "     Hi everybody";
console.log(text8.trim());
let text9 = "Hello    ";
console.log(text9.trimEnd());
let text10 = "5";
console.log(text10.padStart(3,"0"));
let text11 = text10.padEnd(3,"0");
console.log(text11);
let text12 = "Hello india";
let length1 = text12.charAt(8);
console.log(length1);
console.log(text12[0]);
let text13 = "hello everyone how are you everybody?"
console.log(text13.indexOf("every",15));
console.log(text13.lastIndexOf("?"));
let text14 = "hello";
console.log(text14.repeat(2));
let text15 ="hello everyone how are you everybody?";
console.log(text15.search("every"));
let text16 = "hello everyone";
console.log(text16.split(""));
let text17 = "hello Everyone how are you everybody?";
console.log(text17.match(/e/gi));
let text18 = "hello Everyone how are you everybody?";
console.log(text18.includes("hello",12));
let text19 = "hello Everyone how are you everybody";
console.log(text19.startsWith("H",1));
console.log(text19.endsWith("o",5));
console.log(String.fromCharCode(68));
console.log(text19.charCodeAt(2));
console.log(text19.codePointAt(2));