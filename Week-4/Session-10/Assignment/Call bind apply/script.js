class Calculator {
    add(x, y) {
        return x + y;
    }

    subtract(x, y) {
        return x - y;
    }

    multiply(x, y) {
        return x * y;
    }

    divide(x, y) {
        return x / y;
    }
}
  
class ScientificCalculator extends Calculator {
    square(x) {
        return Math.pow(x, 2);
    }

    cube(x) {
        return Math.pow(x, 3);
    }

    power(x, y) {
        return Math.pow(y, x);
    }
}

const scCalc = new ScientificCalculator();

console.log(scCalc.add.call(scCalc, 5, 6));
console.log(scCalc.subtract.apply(scCalc,[6,9]));
var mulitplyByTwo = scCalc.multiply.bind(scCalc, 2);
console.log(mulitplyByTwo(5));
var powerOfThree = scCalc.power.bind(scCalc, 3);
console.log(powerOfThree(2));