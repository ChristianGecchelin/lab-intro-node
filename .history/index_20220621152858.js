class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    console.log("@@", item);
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
      return max;
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
