/*
1.map()
2.filter()
3.reduce(),reduceRight()
4.every()
5.some()
6.indexOf()
7.lastIndexOf()
8.find()
9.findIndex()
*/

class MyCollection{
    constructor(){
        this.elements=arguments;
    }
    mapC = function (callback) {
        let result = [];

        for (let i = 0; i < this.elements.length; i++) {
            result.push(callback(this.elements[i]))
        }

        return result;
    }

    filterC = function (callback) {
        let result = [];
        for (let i = 0; i < this.elements.length; i++) {
            if (callback(this.elements[i])) {
                result.push(this.elements[i])
            }
        }
        return result;
    }

    reduceC=function(callback){
        //let result =[];
        let sum=0;
        for(let i=0;i<this.elements.length;i++){
            if(callback(this.elements[i])){
               sum+=this.elements[i]
            }
        }
        return sum;
    }
    everyC=function(callback){
        for(let i=0;i<this.elements.length;i++){
            if(callback(this.elements[i])){
            }
            else{
                return false;
            }
        }
        return true;
    }
    someC=function(callback){
        for(let i=0;i<this.elements.length;i++){
            if(callback(this.elements[i])){
                return true;
            }
        }
        return false;
    }
    indexOfC=function(findElement){
       for(let i=0;i<this.elements.length;i++){
           if(findElement==this.elements[i]){
               return i;
           }
       }
       return -1;
    }
    lastIndexOfC=function(findElement){
        for(let i=this.elements.length-1;i>=0;i--){
            if(findElement==this.elements[i]){
                return i;
            }
        }
        return -1;
     }
     findC=function(callback){
         for(let i=0;i<this.elements.length;i++){
             if(callback(this.elements[i])){
                 return this.elements[i]
             }
         }
         return -1;
     }
}

let collection=new MyCollection(5,23,12,13,22)
let result =collection.reduceC(x=>{
    return x>13
});
// console.log(result)

let res =collection.everyC(x=>{
    return x>12
})
//  console.log(res)
let result1=collection.someC(x=>{
   return x>32
})
// console.log(result1)
