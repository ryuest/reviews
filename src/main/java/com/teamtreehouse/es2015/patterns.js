var awe = (function() {
  var exports = {
    foo: 5,
    bar: 10
  };

setTimeout( () => {
    console.log("I happen sooner");
    setTimeout( () => {
      // deeper code
      console.log("I happen later");
      }, 1);
      }, 1);

      console.log((() => {return 2*3})());

      exports.googby = function() {
        console.log("good");
      };

      const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];
      let es5OddNumbers = numbers.filter(number => {
        number > 70;
        });
        console.log(es5OddNumbers);

        function myFunction(name, ...params) {
          console.log(name, params)
        }

        myFunction('zz', 2, 3, 4, 5, 78)

        let iterable = [10, 20, 30];

        for (let value of iterable) {
          value += 1;
          console.log(value);
        }

        return exports
        } (awe || {}));
