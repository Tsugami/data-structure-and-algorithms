#include <stdio.h>

int main()
{
  int arr[20] = {2, 3, 1545, 6, 4, 6, 3, 6, 7, 2, 1, 3, 5, 62, 14, 4, 12, 3, 134, 412};

  int arr_last_index = 19;

  int index = 0;
  int cur_index = 0;

  while (cur_index != arr_last_index) {
    if (cur_index == index) {
      index++;

    } else if (arr[cur_index] > arr[index]) {
      int cur_value = arr[cur_index];

      arr[cur_index] = arr[index];
      arr[index] = cur_value;

    } else if (index == arr_last_index) {
      cur_index++;
      index = cur_index;

    } else {
      index++;

    }
  }

  for (int i = 0; i <= arr_last_index; i++) {
    printf("%d ", arr[i]);
  }

  return 0;
}