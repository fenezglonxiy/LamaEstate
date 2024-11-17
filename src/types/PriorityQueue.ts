export class PriorityQueue<T> {
  private _heap: T[] = [];

  private _comparisonFn!: (v1: T, v2: T) => number;

  constructor(comparisonFn: (v1: T, v2: T) => number) {
    this._comparisonFn = comparisonFn;
  }

  private _getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  private _hasParent(index: number) {
    return this._getParentIndex(index) >= 0;
  }

  private _getLeftChildIndex(index: number) {
    return 2 * index + 1;
  }

  private _hasLeftChild(index: number) {
    return this._getLeftChildIndex(index) < this._heap.length;
  }

  private _getRightChildIndex(index: number) {
    return 2 * index + 2;
  }

  private _hasRightChild(index: number) {
    return this._getRightChildIndex(index) < this._heap.length;
  }

  private _swap(i: number, j: number) {
    const temp = this._heap[i];
    this._heap[i] = this._heap[j];
    this._heap[j] = temp;
  }

  add(value: T) {
    const newNode = value;
    this._heap.push(newNode);
    let index = this._heap.length - 1;

    while (
      this._hasParent(index) &&
      this._comparisonFn(this._heap[this._getParentIndex(index)], newNode) > 0
    ) {
      const parentIndex = this._getParentIndex(index);
      this._swap(index, parentIndex);
      index = parentIndex;
    }
  }

  peek() {
    return this._heap.length === 0 ? undefined : this._heap[0];
  }

  poll() {
    if (this._heap.length === 0) {
      return undefined;
    }

    this._swap(0, this._heap.length - 1);
    const poppedItem = this._heap.pop();
    let i = 0;

    while (this._hasLeftChild(i)) {
      const leftChildIndex = this._getLeftChildIndex(i);
      let smallerChildIndex = leftChildIndex;

      if (
        this._hasRightChild(i) &&
        this._comparisonFn(
          this._heap[this._getRightChildIndex(i)],
          this._heap[leftChildIndex]
        ) < 0
      ) {
        smallerChildIndex = this._getRightChildIndex(i);
      }

      if (
        this._comparisonFn(this._heap[i], this._heap[smallerChildIndex]) <= 0
      ) {
        break;
      }

      this._swap(i, smallerChildIndex);
      i = smallerChildIndex;
    }

    return poppedItem;
  }
}
