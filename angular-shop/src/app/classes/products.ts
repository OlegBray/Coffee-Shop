export class Products {
    id?:Number;
    dishName?: String;
    dishPicture?: String;
    dishCategory?: String;
    dishSize?: String;
    dishPrice?: string;
    dishDescription?: String;
    dishVeganOption?: Boolean;
    amount:number = 1;
    overallPrice:string = this.dishPrice||'';

    constructor(args?: any) {
        if (typeof args !== 'undefined' && typeof args === 'object') {
          Object.assign(this, args);
        } else {
          console.log(typeof args);
        }
    }
    
}
