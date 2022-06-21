class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    console.log("@@", item);

    this.items.sort(function (a, b) {
      return a - b;
    });
    this.items.push(item);
  }

  get(pos) {
    if (this.items.length >= pos) {
      return this.items[pos];
    } else {
    }
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
