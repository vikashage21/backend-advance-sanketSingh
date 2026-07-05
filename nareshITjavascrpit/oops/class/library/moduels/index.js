console.log('module working')
export class products {
    userName ;
    Role ;
    productName;
    set userName(name){
        return this.userName = name ;
    }
    get userName(){
        return this.userName;
    }
}