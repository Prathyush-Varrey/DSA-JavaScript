function insertionSort(arr) {
     let n = arr.length;
     for (let i = 1; i < n; i++) {
         let key = arr[i]; // Key is the element to be placed at the correct position
         let j = i - 1;
         
         // Move elements of arr[0..i-1], that are greater than key,
         // to one position ahead of their current position
         while (j >= 0 && arr[j] > key) {
             arr[j + 1] = arr[j]; // Shift element to the right
             j--;
         }
         arr[j + 1] = key; // Place the key at the correct position
     }
     return arr;
 }
 
 let arr = [13, 46, 24, 52, 20, 9];
 console.log('Arr Before Sorting: ', arr);
 
 console.log('-----------------');
 
 console.log("After Sorting: ", insertionSort(arr));
 

/*
 * Pseudo Code:
     for(let i = 1; i < n; i++) {
          key = array[i];
          j = i -1;
          while(j >= 0 && array[j] > key){
               array[j + 1] = array[j];
               j--;
          }
          array[j + 1] = key;
     }
     return array;
 */