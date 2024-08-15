function bubbleSort(arr) {
     let n = arr.length;
     for (let i = n - 1; i >= 1; i--){
          let swapped = false;
          for (let j = 0; j <= i-1; j++){
               if (arr[j] > arr[j + 1]) {
                    let temp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                    swapped = true;
               }
          }
          if (!swapped) {
               break;
          }
          console.log('runs');
          
     }
     return arr;
}

let arr = [13, 46, 24, 52, 20, 9];
console.log('Arr Before Sorting: ', arr);

console.log('-----------------');

console.log("After Sorting: ",bubbleSort(arr));

/*
Pseudo Code
here n = array.length
for(i = n - 1; i >= 1; i--){
     let isSwapped = false;
     for(j = 0; j <= i - 1; j++){
          if(arr[j] > arr[j + 1]){
                    temp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                    swapped = true;
          }
     }
     if(!isSwapped) break;

     return array
}
*/