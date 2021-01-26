export default class PollItem{
    
    constructor(title){
        this.title=title;
        this.count=0;
    }

    addVote=()=>this.count++;
    
}
