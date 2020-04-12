function Calculator () {
    this.read = function() {
        this.a = +prompt('a'?, 0);
        this.b = +prompt('b'?, 0);
    };

    this.mul = function() {
        return this.a + this.b;
    };

    this.sum = function() {
        return this.a * this.b;
    };

    this.sub = function() {
        return this.a - this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
alert( "Mul=" + calculator.mul() );