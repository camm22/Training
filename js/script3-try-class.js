// class Rectangle {

//     constructor(width, length) {
//         this.width = width;
//         this.length = length;
//     }

//     get perimeter(){
//         return 2*(this.width + this.length);
//     }

//     get isValid(){
//         return this.width > 0 && this.length > 0;
//     }

//     isBiggerThan(r){
//         return this.perimeter > r.perimeter;
//     }
// }

// class Square extends Rectangle{

//     constructor(l){
//         super(l, l);
//     }
// }

// const r = new Rectangle(10, 20);
// console.log(r.perimeter);
// console.log(r.isValid);
// const r2 = new Rectangle(-10, 20);
// console.log(r2.isValid);
// const c = new Square(10);
// console.log(c.perimeter);
// console.log(c.isBiggerThan(r));




console.log("###################-EXO-2-########################################");


class Book {

    #page = 1;

    constructor(title, nbPage){
        this.title = title;
        this.nbPage = nbPage;
    }

    get page() {
        return this.#page;
    }

    nextPage(){
        this.#page++;
        if(this.#page == this.nbPage){
            this.close();
        }
    }

    close(){
        this.#page = 1;
    }
}

class Library {
    #books = [];

    addBook(book){
        this.#books.push(book);
    }

    addBooks(books){
        //this.#books.forEach((book) => this.addBook(book));
        this.#books.forEach(this.addBook, this);

        // for(let book of books){
        //    this.addBook(book);
        // }
    }

    findBooksByLetter(letter){
        // let tab = [];
        // for(let book of this.#books){
        //     if(book.title[0].toLowerCase() === letter.toLowerCase()){
        //         tab.push(book);
        //     } 
        // }
        // return tab;

        return this.#books.filter((book) => book.title[0].toLowerCase() === letter.toLowerCase());

    }
}


const b = new Book("Seigneur des Anneaux", 677);
console.log(b.page);
b.nextPage();
console.log(b.page);
b.close();
console.log(b.page);

const l = new Library();
l.addBook(b);
l.addBooks([new Book("Ready Player One", 100), new Book("Oui-Oui", 10), new Book("Sillage", 50)]);
console.log(l.findBooksByLetter('S'));


console.log("fin");