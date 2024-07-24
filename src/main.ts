class Parent {
  setComboBox(foo: number, bar: number) {
    console.log('Parent', foo, bar)
  }
}

class Child extends Parent {
  print() {
    this.setComboBox(0)
  }

  setComboBox(foo: number): void
  setComboBox(foo: number, bar: number): void
  setComboBox(...args: any[]): void {
    if (args.length == 1) {
      return this.__setComboBox(args[0])
    } else if (args.length == 2) {
      return super.setComboBox(args[0], args[1])
    } else {
      throw new Error('[error]')
    }
  }

  __setComboBox(foo: number) {
    console.log('=== Child')

    // 堆栈溢出
    // this.setComboBox(foo)

    this.setComboBox(foo, 3)

    console.log('===')
  }
}

const app = new Child()

app.print()

// 改变 this 指向
// app.print.call({})
