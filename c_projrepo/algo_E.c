#include<stdio.h>
#include<conio.h>
int gcd(int,int);


int main(){
	int a = 24,b = 36;
	int result = gcd(a,b);
	printf("%d",result);
	getch();
}

int gcd(int num1,int num2){
	int rem = num1%num2;
	if(rem == 0){
		return num2;
	}
	else{
		gcd(num2,rem);
	}
}

