//################# Exo 1 ###################################


class Rectangle {
    
    constructor(width, height){
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




//################# Exo 2 ###################################



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
