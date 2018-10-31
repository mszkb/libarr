import libarr from './main.js';

describe('libarr', () => {
  it('move elements from A to B', () => {
    let array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let array2 = []

    libarr.arr_moveTo(array1, array2)

    expect(array1.length).toBe(0)

    expect(array2.length).toBe(10)
    expect(array2[0]).toBe(0)
    expect(array2[9]).toBe(9)
  });

  it('copy elements from A to B', () => {
    let array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
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
    let array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let array2 = [1]
    let array3 = [3, 4, 7]

    libarr.arr_moveToOf(array1, array2, array3)

    expect(array1.length).toBe(7)
    expect(array1[0]).toBe(0)
    expect(array1[6]).toBe(9)

    expect(array2.length).toBe(4)
    expect(array2[0]).toBe(1)
    expect(array2[3]).toBe(7)
  });

  it('remove elements from A which exists in C', () => {
    let array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let array2 = [3, 4, 7]

    libarr.arr_removeOf(array1, array2)

    expect(array1.length).toBe(7)
    expect(array1[0]).toBe(0)
    expect(array1[6]).toBe(9)
  });

  it('remove all elements from A', () => {
    let array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

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
      }, {
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
        values: [1, 2, 3],
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
        values: [9, 8, 7],
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

  it('create an array out of an object, depth 1', () => {
    let object = {
      0: ['2018-05-01', '0,58', '2018-05-01', '101', 'AT', '1871501', '114', '1', '0,58', '0', 'EUR', '0', 'False'],
      1: ['2018-05-01', '61134,14', '2018-05-01', '101', 'AT', '1871501', '101', '1', '53160,1', '11', 'EUR', '5847,6', 'True']
    }

    let array = []
    array = libarr.arr_objectToArray(object)  // depth 1 is default, so need for satisfy second param

    expect(array.length).toBe(2)
    expect(array[0][0]).toBe('2018-05-01')
    expect(array[1][1]).toBe('61134,14')
  })

  it('create an array out of an object, depth 2', () => {
    let object = {
      cases: [
        {
          0: ['2018-05-01', '0,58', '2018-05-01', '101', 'AT', '1871501', '114', '1', '0,58', '0', 'EUR', '0', 'False'],
          1: ['2018-05-01', '61134,14', '2018-05-01', '101', 'AT', '1871501', '101', '1', '53160,1', '11', 'EUR', '5847,6', 'True']
        },
        {
          0: ['2018-07-31', '0', '2018-08-01', '101', 'AT', '1871701', '103', '2', '-137,4', '0', 'EUR', '0', 'False'],
          1: ['2018-07-31', '0', '2018-08-01', '101', 'AT', '1871701', '103', '2', '13329,97', '4', 'EUR', '533,18', 'True']
        },
        {
          0: ['2018-08-01', '0,58', '2018-08-01', '101', 'AT', '1871501', '114', '1', '0,58', '0', 'EUR', '0', 'False'],
          1: ['2018-07-31', '10,83', '2018-08-01', '101', 'AT', '1871501', '114', '1', '9,4', '11', 'EUR', '1,04', 'True']
        }
      ]
    }
  })

  it('replace property labels with labels in keys', () => {
    let keys = ['BLDAT', 'BRUTTO']

    let arrayWithObjects =
      [
        {
          0: '2018-05-01',
          1: '61134,14'
        },
         {
          0: '2019-05-01',
          1: '71134,14'
        },
         {
          0: '2020-05-01',
          1: '81134,14'
        }
      ]

    let newObject = {}
    newObject = libarr.arr_replaceKeysInArrayWithObjects(keys, arrayWithObjects)

    expect(newObject[0].BLDAT).toBe('2018-05-01')

  })


  it('intersect 2 arrays', () => {
    let array1 = [1,2,3,4,5,6,7,'a','b','c','d']
    let array2 = [2,3,4,6,'c','x']

    const intersect = libarr.arr_intersect(array1, array2)
    expect(intersect[0]).toBe(2)
  })


  it('intersect 4 arrays inside an array', () => {
    let array1 = [1,2,3,4,5,6,7,'a','b','c','d']
    let array2 = [2,3,4,6,'c','d']
    let array3 = [2,3,6,'c',1,'a','d']
    let array4 = [2,3,4,'d']

    let masterarray = [array1, array2, array3, array4]

    const intersect = libarr.arr_intersectAll(masterarray)
    expect(intersect).toEqual([2,3,'d'])
  })

});
