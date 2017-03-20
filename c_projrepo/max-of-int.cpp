#include<stdio.h>
#include<conio.h>


int maxInArray(int arr[],int n){
	int m = arr[n-1];
	int i = n-1;
	int j = n;
	int max = arr[5];
	for(i=n;i>=0;i--){
		if(arr[i-1]<=arr[i]){
			j = i;
			max = arr[i];
		}
	}
	return j;
}

int main(){
	int inp_arr[5] = {5,4,3,2,1};
	int max = maxInArray(inp_arr,5);
	printf("%d max index is ::",max);
	return 0;
}
