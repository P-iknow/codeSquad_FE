function main() {
   var s = foo();
   bar(s);
}

function foo() {
   return "hi";
}

function bar(s) {
   var t = s + foo(); // Debugger is currently here
   return t;
}

main();