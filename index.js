export default class Loop {
    add(x, y) {

        return (x + y);
    }
    multiply(x, y) {
        return (x * y);
    }
    divide(x, y) {
        let quotient
        try {
            if (y > 0) {
                quotient = x / y;
            }
            return quotient;
        } catch (error) {
            return error.message;
        }

    }
    subtract(x, y) {
        return (x - y);
    }

}
