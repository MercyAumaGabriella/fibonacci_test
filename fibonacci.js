module.exports = {
  fibonacci: function (num) {
    //first two numbers of the fibonacci series are 0 and 1
    //Here, we are assuming we are using fibonacci series for numbers between 0 - 10
    var result = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    if (num < 0) {
      return undefined;
    } else return result[num];
  },
};
// fixme: 9-02-2022 A.M.G install and configure eslint package
// fixme: 9-02-2022 A.M.G find  good algorithm for fibonacci and implement it.
