
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state_ = 100;
        this.type = null;
      }
    fix (){
        this.state_ = this.state_ * 1.5;
        if(this.state_ > 100){
            this.state_ = 100;
        }
    
    } 
    set state(newState) {
        if(newState < 0){
            this.state_ = 0;
        }
        else if (newState > 100){
            this.state_ = 100;
        }
        else {this.state_ = newState}
    }
    get state() {
        return this.state_;
    }
}


  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount,);
        this.type = "magazine";
      }
  }

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount,);
        this.type = "book";
        this.author = author;
        }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);  
        this.type = "novel"; 
        }   
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);  
        this.type = "fantastic"; 
        }
}

class DetectiveBook extends Book {
    constructor(author,name, releaseDate, pagesCount,) {
        super(author, name, releaseDate, pagesCount);  
        this.type = "detective"; 
        }
}

const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  
  console.log(picknick.author); //"Аркадий и Борис Стругацкие"
  picknick.state = 10;
  console.log(picknick.state); //10
  picknick.fix(); 
  console.log(picknick.state); //15

  // Задача 2

  class Library {
      constructor(name){
          this.name = name;
          this.books = [];
      }
       addBook(book){
          if(book.state > 30){ 
              this.books.push(book);
          }
          else{
              throw new Error('Книга в слишком плохом состоянии')
          }
      }
      findBookBy(type, value){ 
           for(let i = 0; i < this.books.length; i++){ 
            if (this.books[i][type] == value){ 
                return this.books[i];
                }
           }
           return null;
      }
      giveBookByName(bookName){
        for(let i = 0; i < this.books.length; i++){ //(let value of this.books)
            if (this.books[i].name == bookName){ 
                let findBook = this.books[i];
                 this.books.splice(i , 1);
                return findBook
                }
           }
           return null;
      }
  }

