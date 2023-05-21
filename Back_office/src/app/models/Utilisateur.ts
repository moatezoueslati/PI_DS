export class Utilisateur{
  
 

    constructor( public id:number,public username:string,public email:string,public password:string,public roles:Array<string>  ){}
    }