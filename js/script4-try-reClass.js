//################# Exo 1 ###################################


class Rectangle {
    
    constructor(width, height){
        if(width < 0 || height < 0){
            throw new Error("Impossible d'avoir une forme géométrique des dimensions négatives");
        }

        this.width = width;
        this.height = height;
    }

    get perimeter(){
        return (this.width + this.height)*2;
    }

    get isValid(){
        return this.width > 0 && this.height > 0;
    }

    isBiggerThan(x){
        return this.perimeter > x.perimeter;
    }
}


class Square extends Rectangle{

    constructor(width){
        super(width, width);
    }


}

try {
    const r = new Rectangle(-4, 5);
} catch(e) {
    console.log(e.message);  //e.message (juste pour afficher le messaage de l'erreur)
}

//const r = new Rectangle(-4, 5);


try {
    const width = parseInt(prompt("largeur"), 10);
    const height = parseInt(prompt("hauteur"), 10);
    const r = new Rectangle(width, height);
    console.log(r.perimeter);
} catch(e){
    console.log("Impossible de construe de la forme : ERROR :" + e.message);
}

//Erreur personnalisée  :
class PromptError extends Error {
    //...
}


//Ici on fait un refro, pour renvoyer une erreur plus significative.
function promptRectanggle() {
    try {
        const width = parseInt(prompt("largeur"), 10);
        const height = parseInt(prompt("hauteur"), 10);
        const r = new Rectangle(width, height);
        return r;
    } catch(e){
        throw new Error("Entrée utilisataeur invalide", {cause: e}); //pour rajoutter la cause du e qui est renvoyé dans l'initialisation d'un nouveau rectangle dans r, comme ca on a plus d'info sur les origines de l'erreur 
    }
    //ici on remplacer Error par PromptError pour tester les erreur personnalisée mais comme c'est la même ici ca change rien
}
//dans la cause on peut assi mettre d'autre info à part le message par exemple :
//  {cause : {code : 404, url: "https://-----.fr"}}


try{
    promptRectanggle();
} catch(e) {
    //console.log(e.message, e); ici pour afficher à la fois le message de e bien mais aussi e tout coourt avec son formatage "bizarre" par défault.
    console.log(e.message, {e}); //ici pour afficher e sous sa vrai forme d'obejet non formatée car e est un objet (on peut aussi écrire {e: e})
}


//ici on teste l'erreur personnalisée et ca ressemble bcp au polymorphisme en java car on veut savoir si notre erreur est une instacnce de Error ou de Prompt Error ce qui est hyper utile pour pouvoir réagir différament selon le type d'erreur qu'on a facilement.

try {
    promptRectanggle();
} catch(e) {
    if(e instanceof PromptError) {
        console.log("PromptError");
    }
    else{
        console.log("Error calssique");
    }
}


//ce qui faut retenir des erreurss, c'est qu'a chaque fois qu'on crée une fonction où il peut ya avoir un erreur dans l'exécution,
//il faut toujours esssayer de renvoyer l'erreur pour savoir d'où ca vient quand ca bug





//################# Exo 2 ###################################

console.log("##############################################")


class Book {
    #pageActu = 1;

    constructor(title, nbPages){
        this.title = title;
        this.nbPages = nbPages;
    }

    get page(){
        return this.#pageActu;
    }

    nextPage(){
        if(this.#pageActu == this.nbPages){
            this.close()
        }
        else{
            this.#pageActu++;
        }
    }

    close(){
        this.#pageActu = 1;
    }   
}



class Library {
    #books = [];

    addBook(book){
        this.#books.push(book);
    }

    addBooks(books){
        //Méthode 1 : classique

        // for(let book of books){
        //     this.addBook(book);
        // }

        //Méthode 2: utilisation de la boucle forEach qui permet d'appliquer une fonction
        //           sur chacun des éléments l'un après l'autre (ici chaque élément est 
        //           stocké dans le paramètre book l'un apres l'autre) * si deux paramètres,
        //           alors mettre (para1, para2) => {.....}

        //this.#books.forEach(book => this.addBook(book));

        //Méthode 3: ici on utilise addBook() alors qu'on pourrait lui donner directement
        //           en paramètre. Sauf que si on fait ça il faut faire attention aux problèmes
        //           de this qui disparaissent dans les boucle forEach (en gros il est modifié
        //           voir il disparait, alors que c'est pas le cas dans les focntions fléchés
        //           c'est pour ça que ça fonctionne dans la méthode 2 car this est bel et bien
        //           conservé). Il faut donc utiliser la syntax : 
        //           forEach(callBackFn, thisArg)

        this.#books.forEach(this.addBook, this);
    }

    findBooksByLetter(letter){
        //Méthode 1 :

        // const found = [];
        // for(let book of this.#books){
        //     if(book.title[0].toLowercase() === letter.toLowercase()){
        //         found.push(book);
        //     }
        // }
        // return found;

        //Méthode 2 :

        return this.#books.filter(book => book.title[0].toLowerCase() === letter.toLowerCase());

    }
}
