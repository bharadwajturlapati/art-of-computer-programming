/*
 * SimVirtualAddress.c
 *
 *  Created on: 
 *      Author: 
 */

#include <stdio.h>
#include <stdlib.h>


int main() {
	unsigned long page;
	unsigned long offset;
	unsigned long address;
	char virtualAddress[7];
	printf("Enter the virtual Address: ");
	scanf("%s" ,&virtualAddress);
	address = atoll(virtualAddress);
	/* Page Number =  quotient of  address / 4KB and offset = remainder*/

	page = address >> 12; /* Since page size is 4KB => 12 bits holding the virtual address*/
	offset = address & 0xfff;

	printf("The address %lu contains: \n", address);
	printf("page number = %lu\n", page);
	printf("offset = %lu\n", offset);

	return 0;
}
