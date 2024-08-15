
function selectionSort(array) {
     let len = array.length;
     for (let i = 0; i <= len - 2; i++){
          let min = i;
          for (let j = i + 1; j <= len - 1; j++){
               if (arr[j] < arr[min]) {
                    min = j
               }
          }
          let temp = arr[min];
          arr[min] = arr[i];
          arr[i] = temp
     }
     return array;
}

let arr = [13, 46, 24, 52, 20, 9]
console.log("Array Before Sorting");
console.log(arr);

console.log("-----------------------------------");
console.log("After Sorting");


console.log(selectionSort(arr));
// [ 9, 13, 20, 24, 46, 52 ]

/*
Pseudo Code :
     for(i = 0 ; i < = length - 2; i++){
          minVal = i;
          for(j = i +1; j < = length - 1 ;j++){
               if(arr[j] < arr[minVal]){  // If you want in Descending order just change if(arr[j] > arr[minVal])
                    minVal = j;
               }
          }
          // Swap the elements
          temp = arr[minVal];
          arr[minVal] = arr[i];
          arr[i] = temp;
     }

*/