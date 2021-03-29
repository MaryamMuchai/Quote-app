export class Quote {
    showInfo: boolean = false;
  static completeDate:Date;
  static id: number;

    constructor(
         public id:number,
         public name:string,
         public author:string,
         public dateposted:Date,
         public upvote: number,
         public downvote: number,){
        
    }
}
