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
      let max = this.items.sort(function (a, b) {
        return b - a;
      });
      console.log("@@", max);
      return max[0];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.items.length !== 0) {
      let max = this.items.sort(function (a, b) {
        return a - b;
      });
      console.log("@@", max);
      return max[0];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
