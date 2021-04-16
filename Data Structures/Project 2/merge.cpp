#include <bits/stdc++.h>
#include <algorithm>
#include <chrono>
#include <iostream>
#include <vector>
#include <stdio.h>
using namespace std::chrono;
using namespace std;

int count = 0;

void merge(int arr[], int l, int m, int r){
    ::count = ::count + 1;
    int n1 = m - l + 1;
    int n2 = r - m;
    int L[n1], R[n2];
    for (int i = 0; i < n1; i++){
        ::count = ::count + 1;
        L[i] = arr[l + i];}
    for (int j = 0; j < n2; j++){
        ::count = ::count + 1;
        R[j] = arr[m + 1 + j];}
    int i = 0;
    int j = 0;
    int k = l;
    while (i < n1 && j < n2){
        ::count = ::count + 1;
        if (L[i] <= R[j]){
            arr[k] = L[i];
            i++;}
        else{
            arr[k] = R[j];
            j++;}
        k++;}
    while (i < n1){
        ::count = ::count + 1;
        arr[k] = L[i];
        i++;
        k++;}
    while (j < n2){
        ::count = ::count + 1;
        arr[k] = R[j];
        j++;
        k++;}}

void mergeSort(int arr[],int l,int r){
    ::count = ::count + 1;
    if(l>=r){
        return;}
    int boyo =l+ (r-l)/2;
    mergeSort(arr,l,boyo);
    mergeSort(arr,boyo+1,r);
    merge(arr,l,boyo,r);}

void printArray(int A[], int size){
    for (int i = 0; i < size; i++){
        cout << A[i] << " ";}}

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
    mergeSort(randArray, 0, arrSize - 1);
    cout << "\nSorted array: \n";
    printArray(randArray, arrSize);
    cout << "\nSteps: \n" << ::count;
    auto end = std::chrono::high_resolution_clock::now();
    auto elapsed = std::chrono::duration_cast<std::chrono::nanoseconds>(end - begin);
    cout << "\nTime measured: " << elapsed.count() * 1e-9 << " seconds.";
    return 0;}
