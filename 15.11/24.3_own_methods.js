class Student {
    static counter = 0;
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        Student.counter++;
    }
}
const student1 = new Student('Nor', 14, 80)
const student2 = new Student('Hya', 14, 85)
const student3 = new Student('Joun', 12,50)
const student4 = new Student('Juna', 12,65)
const student5 = new Student('Fatema', 18,95)
const student6 = new Student('Bassam', 18,100)
const student7 = new Student('Liron',15,77)


Student.prototype.filtered = function () {
    if(this.grade>80){
        console.log(`${this.name} has"A" degre`)
    }
};

Student.prototype.find = function () {
    if(this.age== 18){
        console.log(`The ${this.name}'s age is 18`)
    }
};


student1.filtered();
student2.filtered();
student3.filtered();
student4.filtered();
student5.filtered();
student6.filtered();
student7.filtered();

student1.find();
student2.find();
student3.find();
student4.find();
student5.find();
student6.find();
student7.find();



