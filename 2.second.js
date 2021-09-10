// ds = {
//     name: "Digpal Singh Rathore",
//     favNum: 23,
//     developer: true,
// }
// console.log(exports, require, __filename, __dirname, module);
// module.exports = ds;

class Circle{
    constructor (r){
        this.r = r;
    }
    area(){
        let a = 3.41 * this.r **2;
        return a;
    }

    circumference(){
        let c = 2 * 3.41 * this.r;
        return c;
    }
}

// let f = new Circle(4);
// console.log("Your Circle's Area is :-",f.area());
// console.log("Your Circle's Circumference is :-",f.circumference());

// module.exports = Circle;

(function (l, b){
    let area = l * b; 
    console.log(area);
})(4,3)

