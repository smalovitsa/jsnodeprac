export default class Comment {
    constructor(text) {
        this.text = text;
        this.votesQty = 0;
    }

    upvote() {
        this.votesQty += 1;
    }
    
    downvote() {
        if (this.votesQty > 0) {
            this.votesQty -= 1;
        }
    }
    
    showComment() {
        console.log(`Comment: ${this.text}, Votes: ${this.votesQty}`);
    }
}
