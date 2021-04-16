#include <bits/stdc++.h>
#include <algorithm>
#include <chrono>
#include <iostream>
#include <vector>
#include <stdio.h>
using namespace std::chrono;
using namespace std;

int count = 0;

void swap(int* a, int* b){
    ::count = ::count + 1;
    int t = *a;
    *a = *b;
    *b = t;}
 
int partition (int arr[], int low, int high){
    ::count = ::count + 1;
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j <= high- 1; j++){
        ::count = ::count + 1;
        if (arr[j] <= pivot){
            i++;
            swap(&arr[i], &arr[j]);}}
    ::count = ::count + 1;
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);}

void quickSort(int arr[], int low, int high){
    ::count = ::count + 1;
    if (low < high){
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);}}

void printArray(int arr[], int size){
    int i;
    for (i=0; i < size; i++){
        printf("%d ", arr[i]);}}

int main(){
    srand (time(NULL));
    int sz;
    cout<<"Enter the size of array please: ";
    cin>>sz;
    auto begin = std::chrono::high_resolution_clock::now();
    int randArray[sz];
    for(int i=0;i<sz;i++){
        randArray[i]=rand()%100 + 1;}
    int arrSize = sizeof(randArray)/sizeof(randArray[0]);
    cout << "Given array \n";
    printArray(randArray, arrSize);
    quickSort(randArray, 0, arrSize-1);
    printf("\nSorted array: \n");
    printArray(randArray, arrSize);
    cout << "\nSteps: \n" << ::count;
    auto end = std::chrono::high_resolution_clock::now();
    auto elapsed = std::chrono::duration_cast<std::chrono::nanoseconds>(end - begin);
    cout << "\nTime measured: " << elapsed.count() * 1e-9 << " seconds.";
    return 0;}