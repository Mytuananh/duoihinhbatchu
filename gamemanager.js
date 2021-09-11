class Gamemanager {
    constructor(_limit) {
        this.limit = _limit;
        this.current = 0;
        this.quizzs = [ ];
    }
    checkfill() {
         return this.quizzs[this.current].suggest;
    }
    check(answer) {
        if (answer ===  this.quizzs[this.current].correct) {
            alert('Bạn đã đúng');
            nextquizz();
        } else  {
            alert('Bạn đã sai');
        }
    }

    nextQuizz() {
        if (this.current <=  this.limit ) {
            this.current++;
        } else {
            alert('Bạn đã đến câu hỏi cuối');
            this.current = 0;
        }
    }
    nextGame() {}
    addQuizz(quizz) {
        this.quizzs.push(quizz);
    }
    deleteQuizz(index) {
        this.quizzs.suggest.splice(index, 1);
    }
}