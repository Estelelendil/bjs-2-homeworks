class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
      }
    fix (){
        this.type = this.type * 1.5;
        if(this.type > 100){
            this.type = 100;
        }
    
    } 
    set controlState(newState) {
        if(newState < 0){
            this.state = 0;
        }
        else if (newState > 100){
            this.state = 100;
        }
        else {this.state = newState}
    }
    get controlState() {
        return this.state;
    }
}

// const ssherlock = new PrintEditionItem(
//     "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
//     2019,
//     1008
//   );
  
//   console.log(ssherlock);
//   console.log(ssherlock.releaseDate); //2019
//   console.log(ssherlock.state); //100
//   ssherlock.fix();
//   console.log(ssherlock.state); //100

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
        super(author, name, releaseDate, pagesCoun);  
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
  picknick.fix(); // неужели нужно отдельно указывать наследование и для методов тоже?!
  console.log(picknick.state); //15
