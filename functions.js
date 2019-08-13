'use strict';
function repeat(fn, n) {
  for (let i=0; i<n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello world');
}

function goodbuy() {
  console.log('Goodbuy world');
}

repeat(hello, 5);
repeat(goodbuy, 5);