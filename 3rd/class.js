/**
 * Class callback
 */
class Counter {
  constructor() {
    this.count = 0;
  }

  increase(runIf5Times) {
    this.count++;
    runIf5Times(this.count);
  }
}

const coolcounter = new Counter();
function somethingPrint(num) {
  if (num % 5 === 0) {
    console.log("Wow! ", num);
  } else {
    console.log("Count: ", num);
  }
}
coolcounter.increase(somethingPrint);
coolcounter.increase(somethingPrint);
coolcounter.increase(somethingPrint);
coolcounter.increase(somethingPrint);
coolcounter.increase(somethingPrint);
coolcounter.increase(somethingPrint);
coolcounter.increase(somethingPrint);
coolcounter.increase(somethingPrint);
coolcounter.increase(somethingPrint);
coolcounter.increase(somethingPrint);
coolcounter.increase(somethingPrint);
coolcounter.increase(somethingPrint);
