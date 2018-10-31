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

        this.arr_clear(Array2)
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
            if(a1.indexOf(e) > -1) {
              a2.push(e)
            }
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

    /**
     * Takes an object and returns an array of the values
     * Specify the depth for recursive array creation
     *
     * Depth -1 => infinite, checks every child element and makes an array out of it
     *
     * @param Object - a plain object
     * @param depth - how deep should the array creation go
     */
    static arr_objectToArray(object, depth = 1) {
        // TODO depth
        return Object.entries(object)
    }

    /**
     * Takes a list of labels with keys and replace every property label
     *
     * @precondision:  keys length === object.keys length
     *
     * @param keys - array or object containing the labels
     * @param arrayWithObjects
     * @return object with all properties renamed with key list elements
     */
    static arr_replaceKeysInArrayWithObjects(keys, arrayWithObjects) {

        let newArray = []

        arrayWithObjects.forEach((element, i) => {
            let single = {}
            Object.keys(element).forEach((f, j) => {
                single[keys[j]] = element[f]
            })
            newArray.push(single)
        })

        return newArray
    }

    /**
     * Takes a list of labels with keys and wrap the array element
     *
     * @param keys
     * @param array
     */
    static arr_addKeyToArray(keys, array) {

    }

    /**
     * Intersects each value of one array with another array
     *
     * @precondision Only works with 1 dimension \n Arrays must not be nested
     * @note Array values should be primitive
     *
     * @param Array1 - mixed content
     * @param Array2 - mixed content
     * @returns Array with intersected values
     */
    static arr_intersect(Array1, Array2) {
        return Array1.filter(value => -1 !== Array2.indexOf(value));
    }

    /**
     * Intersects every array of given array
     * Only works with 1 nested level
     *
     * For deeper intersection @use arr_deepIntersectAll(ArrayOfDeppArrays)
     *
     * @param ArrayOfArrays - array with elements which are arrays with primitive types
     * @returns Array with intersected values
     */
    static arr_intersectAll(ArrayOfArrays) {
        let ArrayOfArraysLength = ArrayOfArrays.length

        // Catch all the easy stuff
        if (ArrayOfArraysLength === 0) {
            return []  // given array is empty
        } else if (ArrayOfArraysLength === 1) {
            return ArrayOfArrays[0]  // given array has only one index
        } else if (ArrayOfArraysLength === 2) {
            return this.arr_intersect(ArrayOfArrays[0], ArrayOfArrays[1])  // only two indezes given, no need for the loop
        }

        // first round - initialize intersected array with the first two indezes
        let intersected = this.arr_intersect(ArrayOfArrays[0], ArrayOfArrays[1])

        // loop round - intersect every index of the array with the already intersected one
        for (let idx = 2; idx <= ArrayOfArraysLength - 1; idx++) {
            intersected = this.arr_intersect(intersected, ArrayOfArrays[idx])
        }

        return intersected
    }
}


export default libarr
