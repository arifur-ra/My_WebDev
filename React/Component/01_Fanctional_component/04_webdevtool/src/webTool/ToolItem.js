export default class ToolItem{
    
    constructor(title){
        this.title=title;
        this.count=0;
    }

    addVote=()=>this.count++;
    
}
