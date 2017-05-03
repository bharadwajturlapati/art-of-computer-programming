#include<stdio.h>
#include<conio.h>


void swap(int a,int b){
	int temp = a;
	a = b;
	b = temp;
}

int main(){
	int a[10] = {0,0,1,2,3,4};
	int lastKnownNonZero;
	int lastUpdatedIndex=0;
	for(int i=0;i<10;i++){
		if(a[i] !=0){
			lastKnownNonZero = i;
			int temp = a[i];
			a[i] = a[lastUpdatedIndex];
			a[lastUpdatedIndex] = temp;
			//swap(a[i],a[lastUpdatedIndex]);
			lastUpdatedIndex++;
		} else{
			//
		}
	}
	
	for(int i=0;i<10;i++){
		printf("%d", a[i]);
	}
	getch();
} 
