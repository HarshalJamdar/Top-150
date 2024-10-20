// Implement the RandomizedSet class:

// RandomizedSet() Initializes the RandomizedSet object.
// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
// You must implement the functions of the class such that each function works in average O(1) time complexity.

// Example 1:
// Input
// ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
// [[], [1], [2], [2], [], [1], [2], []]
// Output
// [null, true, false, true, 2, true, false, 2]

// Explanation
// RandomizedSet randomizedSet = new RandomizedSet();
// randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
// randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
// randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
// randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
// randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
// randomizedSet.insert(2); // 2 was already in the set, so return false.
// randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.


class RandomizedSet {
    constructor() {
        this.map = new Map(); // stores the element as key and its index in the array as value
        this.list = []; // stores the actual elements
    }
    
    // Inserts a value into the set. Returns true if the value was not already present.
    insert(val) {
        if (this.map.has(val)) {
            return false;
        }
        this.map.set(val, this.list.length); // add value to map with its index in the list
        this.list.push(val); // add value to the list
        return true;
    }
    
    // Removes a value from the set. Returns true if the value was present.
    remove(val) {
        if (!this.map.has(val)) {
            return false;
        }
        
        const index = this.map.get(val); // get the index of the element to remove
        const lastElement = this.list[this.list.length - 1]; // get the last element in the list
        
        // Swap the last element with the element to be removed
        this.list[index] = lastElement;
        this.map.set(lastElement, index); // update the map with the new index of the last element
        
        // Remove the last element from the list and map
        this.list.pop(); // remove the last element from the list
        this.map.delete(val); // delete the value from the map
        
        return true;
    }
    
    // Returns a random element from the set.
    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.list.length);
        return this.list[randomIndex];
    }
}


let randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1));    // true
console.log(randomizedSet.remove(2));    // false
console.log(randomizedSet.insert(2));    // true
console.log(randomizedSet.getRandom());  // either 1 or 2 randomly
console.log(randomizedSet.remove(1));    // true
console.log(randomizedSet.insert(2));    // false (2 is already in the set)
console.log(randomizedSet.getRandom());  // 2 (as it's the only element left)

// Time Complexity:
// Insert: O(1) on average because adding an element to both the hash map and the list happens in constant time.
// Remove: O(1) on average. Removing from the hash map and array is done in constant time due to the swap technique.
// getRandom: O(1) because accessing a random index in the list takes constant time.
// Space Complexity:
// Space Complexity: O(n), where n is the number of elements in the set. The space is used for storing elements in both the array and the map.