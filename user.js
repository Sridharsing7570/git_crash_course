function sridhar(a, b) {
    return a + b;
}

console.log(sridhar(2, 4));

function map(fn, args) {
    fn(args);
}

const fn = (args) => {
    console.log(args);
};

map(fn, "sridhar");
