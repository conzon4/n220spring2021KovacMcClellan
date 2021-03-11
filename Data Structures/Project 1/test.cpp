#include<iostream>
using namespace std;
#include<fstream>
#include<iomanip>

class student
{   char name[100];
    int GR1,GR2,GR3,GR4,GR5,ID;
    public:
    void getdata();
    void showGrade() const;
    void stuGrade() const;
    int getID() const;};

void createStudent();
void studentList();
void mainScreen();
void showStudent(int);
void editStudent(int);
void deleteStudent(int);

void student::getdata()
{   cout<<"\nEnter the ID for this student :";cin>>ID;
    cout<<"\n\nEnter the name for this student :";
    cin.ignore();
    cin.getline(name,100);
    cout<<"\nPercent grade for first class? :";cin>>GR1;
    cout<<"\nPercent grade for second class? :";cin>>GR2;
    cout<<"\nPercent grade for third class? :";cin>>GR3;
    cout<<"\nPercent grade for fourth class? :";cin>>GR4;
    cout<<"\nPercent grade for fifth class? :";cin>>GR5;}

void student::showGrade() const
{   cout<<"\nID of student :"<<ID;
    cout<<"\nName of student :"<<name;
    cout<<"\nGrade for first class :"<<GR1;
    cout<<"\nGrade for second class :"<<GR2;
    cout<<"\nGrade for third class :"<<GR3;
    cout<<"\nGrade for fourth class :"<<GR4;
    cout<<"\nGrade for fifth class :"<<GR5<<"\n";}

void student::stuGrade() const
{   cout<<ID<<setw(6)<<" "<<name<<setw(10)<<GR1<<setw(4)<<GR2<<setw(4)<<GR3<<setw(4)
    <<GR4<<setw(4)<<GR5<<setw(8)<<setw(6)<<endl;}

int  student::getID() const
{   return ID;}

int main()
{   char ch;
    cout.setf(ios::fixed|ios::showpoint);
    cout<<setprecision(2);
    mainScreen();
    do
    {   system("cls");
        cout<<"\n\tWould you like to quit the program?";
        cout<<"\n\n\tEnter (y/n): ";
        cin>>ch;
        switch(ch)
        {   case 'n': mainScreen();
                break;
            case 'y':
                break;
            default :cout<<"\a";}}
    while(ch!='y');
    return 0;}

void mainScreen()
{   char ch;
    int num;
    system("cls");
    cout<<"\n\n\tMAIN MENU";
    cout<<"\n\t1.CREATE STUDENT";
    cout<<"\n\t2.SEARCH STUDENT";
    cout<<"\n\t3.MODIFY STUDENT";
    cout<<"\n\t4.DELETE STUDENT";
    cout<<"\n\t5.LIST STUDENTS";
    cout<<"\n\t6.EXIT THE PROGRAM";
    cout<<"\n\n\tEnter a number: ";
    cin>>ch;
    system("cls");
    switch(ch)
    {   case '1':    createStudent(); break;
        case '2':    cout<<"\n\n\tPlease enter student ID :"; cin>>num;showStudent(num); break;
        case '3':    cout<<"\n\n\tPlease enter student ID :"; cin>>num;editStudent(num);break;
        case '4':    cout<<"\n\n\tPlease enter student ID :"; cin>>num;deleteStudent(num);break;
        case '5' :    studentList(); break;
        case '6' :    break;
        default:    cout<<"\a"; mainScreen();}}

void createStudent()
{   student st;
    ofstream outFile;
    outFile.open("student.dat",ios::binary|ios::app);
    st.getdata();
    outFile.write(reinterpret_cast<char *> (&st), sizeof(student));
    outFile.close();
    cout<<"\n\nSuccess. Press enter to continue.";
    cin.ignore();
    cin.get();}

void showStudent(int n)
{   student st;
    ifstream inFile;
    inFile.open("student.dat",ios::binary);
    if(!inFile)
    {   cout<<"Error retrieving file... Press any Key...";
        cin.ignore();
        cin.get();
        return;}
    bool flag=false;
    while(inFile.read(reinterpret_cast<char *> (&st), sizeof(student)))
    {   if(st.getID()==n)
        {   st.showGrade();
            flag=true;}}
    inFile.close();
    if(flag==false)
        cout<<"\n\nDoes not exist.";
    cin.ignore();
    cin.get();}

void editStudent(int n)
{   bool found=false;
    student st;
    fstream File;
    File.open("student.dat",ios::binary|ios::in|ios::out);
    if(!File)
    {   cout<<"Error retrieving file... Press any Key...";
        cin.ignore();
        cin.get();
        return;}
    while(!File.eof() && found==false)
    {   File.read(reinterpret_cast<char *> (&st), sizeof(student));
        if(st.getID()==n)
        {   st.showGrade();
            st.getdata();
            int pos=(-1)*static_cast<int>(sizeof(st));
            File.seekp(pos,ios::cur);
            File.write(reinterpret_cast<char *> (&st), sizeof(student));
            cout<<"\n\n\t Student updated";
            found=true;}}
    File.close();
    if(found==false)
        cout<<"\n\n Student could not be found. ";
    cin.ignore();
    cin.get();}

void deleteStudent(int n)
{   student st;
    ifstream inFile;
    inFile.open("student.dat",ios::binary);
    if(!inFile)
    {   cout<<"Error retrieving file... Press any Key...";
        cin.ignore();
        cin.get();
        return;}
    ofstream outFile;
    outFile.open("Temp.dat",ios::out);
    inFile.seekg(0,ios::beg);
    while(inFile.read(reinterpret_cast<char *> (&st), sizeof(student)))
    {   if(st.getID()!=n)
        {   outFile.write(reinterpret_cast<char *> (&st), sizeof(student));}}
    outFile.close();
    inFile.close();
    remove("student.dat");
    rename("Temp.dat","student.dat");
    cout<<"\n\n\tStudent deleted...";
    cin.ignore();
    cin.get();}

void studentList()
{   student st;
    ifstream inFile;
    inFile.open("student.dat",ios::binary);
    if(!inFile)
    {   cout<<"Error retrieving file... Press any Key...";
        cin.ignore();
        cin.get();
        return;}
    cout<<"ID       Name        1   2   3   4   5"<<endl;
    while(inFile.read(reinterpret_cast<char *> (&st), sizeof(student)))
    {   st.stuGrade();}
    cin.ignore();
    cin.get();
    inFile.close();}
