export class Products {
    id?:Number;
    dishName?: String;
    dishPicture?: String;
    dishCategory?: String;
    dishSize?: String;
    dishPrice?: String;
    dishDescription?: String;
    dishVeganOption?: Boolean;

    constructor(args?: any) {
        if (typeof args !== 'undefined' && typeof args === 'object') {
          Object.assign(this, args);
        } else {
          console.log(typeof args);
        }
    }

}
