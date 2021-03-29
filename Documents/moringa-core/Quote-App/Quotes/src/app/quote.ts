export class Quote {
    datePosted!: string | number | Date ;
    showInfo: boolean = false;
  static completeDate: string | number | Date;
  static id: number;

    constructor(
         public id:number,
         public name:string,
         public author:string,
         public dateposted:Date,
         public upvote: number,
         public downvote: number,
    
         ){
    
    }
}
