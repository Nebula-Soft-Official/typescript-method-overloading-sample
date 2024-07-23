class Parent {
  get(foo: number) {
    console.log('Parent', foo)
  }

  getTwo(foo: number, bar: number) {
    console.log('Parent get two', foo, bar)
  }
}

class Child extends Parent {
  get(foo: number): void
  get(foo: number, bar: number): void
  get(foo: number, bar: number, temp: number): void
  get(...args: any[]) {
    if (args.length == 1) {
      super.get(args[0])
    }

    if (args.length == 2) {
      // Child
      this._get(args[0], args[1])
      // this.get(args[0], args[1]) // RangeError: Maximum call stack size exceeded

      // Parent
      this.getTwo(args[0], args[1])
    }

    if (args.length == 3) {
      console.log('Child get three', args[0], args[1], args[2])
    }
  }

  _get(foo: number, bar: number) {
    console.log('Child get two', foo, bar)
  }
}

const app = new Child()

app.get(0)
app.get(0, 1)
app.get(0, 1, 2)
