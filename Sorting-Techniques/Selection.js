
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
console.log(selectionSort(arr));
// [ 9, 13, 20, 24, 46, 52 ]