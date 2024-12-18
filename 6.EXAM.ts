let numbers = [];
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt({i + 1}:), 10);
    numbers.push(num);
}
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    
    console.log("Starting Bubble Sort Process:");

    // Perform Bubble Sort
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        // Compare each pair of adjacent items
        for (let j = 0; j < n - i - 1; j++) {
            console.log(Comparing ${arr[j]} and ${arr[j + 1]});
            if (arr[j] > arr[j + 1]) {
                // Swap the elements if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
                console.log(Swapped: ${arr[j]} and ${arr[j + 1]} =>, arr);
            }
        }
        // If no elements were swapped, break the loop (the array is already sorted)
        if (!swapped) break;
    }

    return arr;
}

// Pass the populated array to the bubbleSort function
let sortedArray = bubbleSort(numbers);

// Log the sorted array to the console
console.log("Sorted Array:", sortedArray");