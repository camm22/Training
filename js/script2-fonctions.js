function printf(m){
    console.log(`Voici le message : ${m}`);
}

printf("ah bon");


const printg = function(m){
    console.log("Voici le message : " + m);
}

printg("hehehe");



printf("#########################");


function myFunction(m){
    console.log(this);
}
myFunction(4);
myFunction.call(printf, 4, "dd");


printf("#########################");

const aa = {
    firstname: "James",
    lastname: "Bond",
    fullname : function() {
        console.log(this.firstname);
    } 
};

aa.fullname();


const myStr = "bonjour";

console.log(myStr.length)
console.log(myStr.toUpperCase())


const aaa = 'aaa', bbb="bbb";

console.log(aaa, bbb, "il était une fois", 43)

