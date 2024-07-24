class Parent {
  get(foo: number): void
  get(foo: string): void
  get(foo: number | string) {
    if (typeof foo === 'number') {
      console.log('Parent number', foo)
    } else if (typeof foo === 'string') {
      console.log('Parent string', foo)
    }
  }
}

class Child extends Parent {
  get(foo: number): void
  get(foo: string): void
  get(foo: number, bar: number): void
  get(...args: any[]) {
    if (args.length === 1) {
      super.get(args[0])
    } else if (args.length === 2) {
      this._get(args[0], args[1])
    }
  }

  _get(foo: number, bar: number) {
    console.log('Child get two', foo, bar)
  }
}

const app = new Child()

app.get(0)
app.get('string')
