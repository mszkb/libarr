/**
 * libarr contains functionality to copy/modify/clear arrays
 *
 * - copy all elements from A to B
 * - move all elements from A to B
 * - move only the elements from A contained in C to B
 * - remove only the elements from A contained in B
 * - clear A
 *
 * @author msz
 */
class libarr {

  /**
   * Appends all elements from Array1 to Array2
   *
   * @example @see main.test.js
   * @param Array1
   * @param Array2
   */
  static arr_copyTo(Array1, Array2) {
    const a1 = Array1.slice()
    const a2 = Array2.slice()

    a1.map((e) => {
      a2.push(e)
    })

    Array2.push(...a2)
  }

  /**
   * Moves all elements from Array1 to Array2
   * Array1 will be cleared
   *
   * @example @see main.test.js
   * @param Array1
   * @param Array2
   */
  static arr_moveTo(Array1, Array2) {
    this.arr_copyTo(Array1, Array2)
    this.arr_clear(Array1)
  }

  /**
   * Moves all elements containd in Array3 from Array1 to Array2
   *
   * @example @see main.test.js
   * @param Array1
   * @param Array2
   * @param Array3
   */
  static arr_moveToOf(Array1, Array2, Array3) {
    const a1 = Array1.slice()
    const a2 = Array2.slice()
    const a3 = Array3.slice()

    a3.map((e) => {
      a2.push(a1[e])
    })

    this.arr_removeOf(a1, a3)

    this.arr_clear(Array1)
    this.arr_clear(Array2)
    Array1.push(...a1)
    Array2.push(...a2)
  }

  /**
   * Removes all elements from Array1 contained in Array2
   *
   * @param Array1
   * @param Array2
   */
  static arr_removeOf(Array1, Array2) {
    const a1 = Array1.slice()
    const a2 = Array2.slice()

    const newA1 = a1.filter((e) => {
      return a2.indexOf(e) === -1
    })

    this.arr_clear(Array1)
    Array1.push(...newA1)
  }

  /**
   * Clears the given Array
   *
   * @param Array1
   */
  static arr_clear(Array1) {
    Array1.length = 0
  }
}



export default libarr
