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

console.log(myStr.length);
console.log(myStr.toUpperCase());


const aaa = 'aaa', bbb="bbb";

console.log(aaa, bbb, "il était une fois", 43);

const myFunction2 = (para1, para2) => {
    console.log(para1, para2, this);
}

myFunction2.call(2, 4, 5);


const somme = (a, b) => a+b;

console.log(somme(3,4));

printf("#############Exercice#################");


function getRandomInt(max){
    return Math.floor(Math.random() * (max + 1));
}
const solution = getRandomInt(10);

printf("solution : " + solution)

function demanderNb(n){
    return n===solution;
}

function guess(){
    return demanderNb(prompt("Entrez le nombre de votre choix : ") * 1);
}



let cpt = 0; // mettre cpt à 3 pour tester le programme
while(cpt >= 1){
    console.log("Devinez le nombre (attention, il ne vous reste plus que", cpt, "essais)");
    if (guess()){
        console.log("Bravo");
        break;
    }
    else if (cpt == 1){
        console.log("Vous avez perdu")
        break;
    }
    cpt--;
}
