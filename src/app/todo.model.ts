export class Todo{

    public id:number;
    public task: string;
    public done: boolean;
  constructor(id:number,taskDesc: string,isDone:boolean ){
      this.id=id;
      this.task=taskDesc;
     this.done=isDone;
  }

}