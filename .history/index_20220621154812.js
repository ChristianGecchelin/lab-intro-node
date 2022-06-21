class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items.length >= pos) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length !== 0) {
      let maxArray = this.items.sort(function (a, b) {
        return b - a;
      });
      return maxArray[0];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.items.length !== 0) {
      let minArray = this.items.sort(function (a, b) {
        return a - b;
      });
      return minArray[0];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      const element = this.items[i];
      sum += element;
    }
    return sum;
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let sum = 0;
      let average;
      for (let i = 0; i < this.items.length; i++) {
        const element = this.items[i];
        sum += element;
      }
      return (average = sum / this.items.length);
    }
  }
}

module.exports = SortedList;
