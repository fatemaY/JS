const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics"],
    students: [],
    capacityLeft: 2,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],
    };

    function findPerson(type, id) {
        const collection = type === "student" ? school.students : school.teachers;
        return collection.find(person => person.id === id) || null;
    }
    console.log(findPerson("teacher", 1));



    function assignStudent(studentId, subject) {
        const availableTeacher = school.teachers.find(teacher => {
          return teacher.subjects.includes(subject) && teacher.capacityLeft > 0;
        });
    
        if (availableTeacher) {
          const student = school.students.find(student => student.id === studentId);
          availableTeacher.students.push(student);
          availableTeacher.capacityLeft--;
          console.log(`${student.name} assigned to ${availableTeacher.name}`);
        } 
        else {
          console.log("Sorry, no available teachers left");
        }
      }
      assignStudent(10, "biology");
      assignStudent(11, "biology");
      assignStudent(12, "biology");
      assignStudent(13, "biology");




    function assignTeachersSubject(teacherId, newSubject) {
        const teacher = school.teachers.find(teacher => teacher.id === teacherId);
        if (teacher) {
          if (!teacher.subjects.includes(newSubject)) {
            teacher.subjects.push(newSubject);
            console.log(`${newSubject} added to ${teacher.name}'s subjects`);
          } 
          else {
            console.log(`${teacher.name} already teaches ${newSubject}`);
          }
        } 
        else {
          console.log("Teacher not found");
        }
      }
      assignTeachersSubject(2, "math");
      assignTeachersSubject(2, "ethics");
      assignTeachersSubject(4, "ethics");

      
      function priceForLessons (teacherId,price){
        const teacher = school.teachers.find(teacher => teacher.id === teacherId);
        if (teacher) {
            teacher.price=price;
            return teacher;
        }
        return "teacher not found";

      }
    
      console.log(priceForLessons (1,100));