class TowerOfHanoi {
  constructor(disk_number) {
    this._sticks = {
      "first": [4, 3, 2, 1], "second": [], third: []
    }
  }

  move (from, to, disk_number) {
    if (disk_number == 1) {
      this._sticks[to].push(this._sticks[from].pop());
      console.log(JSON.stringify(this._sticks));
    } else {
      let work;
      for (var k in this._sticks) {
        if (k != from && k != to) {
	  work = k;
	  break;
	}
      }
      this.move(from, work, disk_number - 1);
      this._sticks[to].push(this._sticks[from].pop());
      console.log(JSON.stringify(this._sticks));
      this.move(work, to, disk_number - 1);
    }
  }
}

var hanoi = new TowerOfHanoi(4);
hanoi.move("first", "third", 4);
