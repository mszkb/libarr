import libarr from './main.js';

describe('libarr', () => {
  it('move elements from A to B', () => {
    let array1 = [0,1,2,3,4,5,6,7,8,9]
    let array2 = []

    libarr.arr_moveTo(array1, array2)

    expect(array1.length).toBe(0)

    expect(array2.length).toBe(10)
    expect(array2[0]).toBe(0)
    expect(array2[9]).toBe(9)
  });

  it('copy elements from A to B', () => {
    let array1 = [0,1,2,3,4,5,6,7,8,9]
    let array2 = []

    libarr.arr_copyTo(array1, array2)
    libarr.arr_copyTo(array1, array2)

    expect(array1.length).toBe(10)
    expect(array1[0]).toBe(0)
    expect(array1[9]).toBe(9)

    expect(array2.length).toBe(20)
    expect(array2[0]).toBe(0)
    expect(array2[9]).toBe(9)
  });

  it('move elements from A to B only the elements from A exists in C', () => {
    let array1 = [0,1,2,3,4,5,6,7,8,9]
    let array2 = [1]
    let array3 = [3,4,7]

    libarr.arr_moveToOf(array1, array2, array3)

    expect(array1.length).toBe(7)
    expect(array1[0]).toBe(0)
    expect(array1[6]).toBe(9)

    expect(array2.length).toBe(4)
    expect(array2[0]).toBe(1)
    expect(array2[3]).toBe(7)
  });

  it('remove elements from A which exists in C', () => {
    let array1 = [0,1,2,3,4,5,6,7,8,9]
    let array2 = [3,4,7]

    libarr.arr_removeOf(array1, array2)

    expect(array1.length).toBe(7)
    expect(array1[0]).toBe(0)
    expect(array1[6]).toBe(9)
  });

  it('remove all elements from A', () => {
    let array1 = [0,1,2,3,4,5,6,7,8,9]

    libarr.arr_clear(array1)

    expect(array1.length).toBe(0)
  });

  it('move objects from A to B', () => {
    let array1 = [
      {
        name: "test2",
        value: 2,
        flag: false
      },
      {
        name: "test3",
        value: 3,
        flag: false
      },
      {
        name: "test4",
        value: 4,
        flag: false
      },{
        name: "test5",
        value: 5,
        flag: false
      },
      {
        name: "test6",
        value: 6,
        flag: false
      }
      ]
    let array2 = []

    libarr.arr_moveTo(array1, array2)

    expect(array1.length).toBe(0)

    expect(array2.length).toBe(5)
    expect(array2[0].name).toBe("test2")
    expect(array2[3].name).toBe("test5")
  });

  it('move nested objects from A to B', () => {
    let array1 = [
      {
        person: {
          name: "anton",
          lastname: "tirol"
        },
        values: [1,2,3],
        flags: {
          a: true,
          b: true
        }
      },
      {
        person: {
          name: "anton1",
          lastname: "tirol1"
        },
        values: [9,8,7],
        flags: {
          a: false,
          b: false
        }
      },
    ]
    let array2 = []

    libarr.arr_moveTo(array1, array2)

    expect(array1.length).toBe(0)

    expect(array2.length).toBe(2)
    expect(array2[0].person.name).toBe("anton")
    expect(array2[0].flags.a).toBeTruthy()
    expect(array2[1].person.name).toBe("anton1")
  });
});
