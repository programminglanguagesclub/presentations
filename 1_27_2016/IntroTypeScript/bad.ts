declare var process:any;

class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return this.greeting;
    }
};

var greeter = new Greeter("Hello, world!");
    
console.log(greeter.greet());

var bad = new Greeter(eval(process.argv[2]));
console.log(bad.greet());
