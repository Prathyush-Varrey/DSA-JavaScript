function partition(arr, low, high) {
     let pivot = arr[low];
     let i = low;
     let j = high;
 
     while (i < j) {
         while (arr[i] <= pivot && i < high) {
             i++;
         }
         while (arr[j] > pivot && j > low) {
             j--;
         }
         if (i < j) {
             [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap arr[i] and arr[j]
         }
     }
     [arr[low], arr[j]] = [arr[j], arr[low]]; // Swap pivot with arr[j]
     return j;
 }
 
 function quickSort(arr, low, high) {
     if (low < high) {
         let pI = partition(arr, low, high);
         quickSort(arr, low, pI - 1);
         quickSort(arr, pI + 1, high);
     }
     return arr;
 }
 
 let arr = [3, 4, 1, 5, 5, 6, 7, 9];
 let low = 0;
 let high = arr.length - 1;
 
 console.log(quickSort(arr, low, high)); // [ 1, 3, 4, 5, 5, 6, 7, 9 ]
 