let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
// and pass it to .map()
let halved = nums.map(function(n) {
  return n/2;
});

console.log(halved);

// why is the {} inside of the ()???


let names = ["Chris", "Jim", "Sally", "Blake", "Paul"];

// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map(x => x[0]);

// i dont know how to find 0 with a traditional function

console.log(firstInitials);