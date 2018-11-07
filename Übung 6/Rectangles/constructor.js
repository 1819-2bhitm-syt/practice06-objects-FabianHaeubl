function Rectangle (length,width){
    this.length = length;
    this.width  = width;
    this.getArea = function () {
        return this.length * this.width;
    }
}
let rect1 = new Rectangle(8,3);
let rect2 = new Rectangle(60,10);
let rect3 = new Rectangle(9,5);

console.log(`1.Rechteck: 
Länge = ${rect1.length}, Breite = ${rect1.width}, Fläche = ${rect1.getArea()}
`);
console.log(`2.Rechteck: 
Länge = ${rect2.length}, Breite = ${rect2.width}, Fläche = ${rect2.getArea()}
`);
console.log(`3.Rechteck: 
Länge = ${rect3.length}, Breite = ${rect3.width}, Fläche = ${rect3.getArea()}`);
