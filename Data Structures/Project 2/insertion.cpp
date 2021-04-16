#include <bits/stdc++.h>
#include <algorithm>
#include <chrono>
#include <iostream>
#include <vector>
#include <stdio.h>
using namespace std::chrono;
using namespace std;

int count = 0;

void insertionSort(int arr[], int n){
    int i, key, x;
    for (i = 1; i < n; i++){
        key = arr[i];
        x = i - 1;
        while (x >= 0 && arr[x] > key){
            ::count = ::count + 1;
            arr[x + 1] = arr[x];
            x = x - 1;}
        arr[x + 1] = key;}}

void printArray(int arr[], int n){
    int i;
    for (i = 0; i < n; i++)
        cout << arr[i] << " ";}

int main(){
    srand (time(NULL));
    int sz;
    cout<<"Enter the size of array please: ";
    cin>>sz;
    auto begin = std::chrono::high_resolution_clock::now();
    int randArray[sz];
    for(int i=0;i<sz;i++){
        randArray[i]=rand()%100 + 1;}
    int arrSize = sizeof(randArray) / sizeof(randArray[0]);
    cout << "Given array: \n";
    printArray(randArray, arrSize);
    insertionSort(randArray, arrSize);
    cout << "\nSorted array: \n";
    printArray(randArray, arrSize);
    cout << "\nSteps: \n" << ::count;
    auto end = std::chrono::high_resolution_clock::now();
    auto elapsed = std::chrono::duration_cast<std::chrono::nanoseconds>(end - begin);
    cout << "\nTime measured: " << elapsed.count() * 1e-9 << " seconds.";
    return 0;}
