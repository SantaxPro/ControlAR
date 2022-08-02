//Almaceno los datos de prueba de los cursos
const courses = [
    {
        id: 1,
        name: '6to 1ra',
        number_alumns: 25,
        array_alumns:[{
            student_id: 1,
            student_name: '5555Daniel',
            student_lastname: 'Chavez',
            attendance_entrys: []
        },
        {
            student_id: 2,
            student_name: '555David',
            student_lastname: 'Cappelluti',
            attendance_entrys: [
                
            ]
        },
        {
            student_id: 3,
            student_name: ' 555Rayen',
            student_lastname: 'Millahual',
            attendance_entrys: [
                
            ]
        },
        {
            student_id: 4,
            student_name: '555Alexander',
            student_lastname: ' Gonzalez',
            attendance_entrys: [
                
            ]
        },
        {
            student_id: 5,
            student_name: '555juanito',
            student_lastname: 'Perez',
            attendance_entrys: [
                
            ]
        }],
    },
    {
        id: 2,
        name: '6to 2da',
        number_alumns: 25,
        array_alumns:[{
            student_id: 1,
            student_name: '666Daniel',
            student_lastname: 'Chavez',
            attendance_entrys: [

            ]
        },
        {
            student_id: 2,
            student_name: '666David',
            student_lastname: 'Cappelluti',
            attendance_entrys: [
                
            ]
        },
        {
            student_id: 3,
            student_name: ' 666Rayen',
            student_lastname: 'Millahual',
            attendance_entrys: [
                
            ]
        },
        {
            student_id: 4,
            student_name: '666Alexander',
            student_lastname: ' Gonzalez',
            attendance_entrys: [
                
            ]
        },
        {
            student_id: 5,
            student_name: '666juanito',
            student_lastname: 'Perez',
            attendance_entrys: [
                
            ]
        }],
    },
]


export default function assignNewEntry (newEntry){
    //Desestructuro el prop newEntry que es un objeto
    //Que contiene la informacion del nuevo campo
    //que se va a agregar a la base de datos
    //Extraigo la id para buscar el alumno
    const targetStudentId = newEntry.student_id;

    for (let i = 0; i < courses.length; i++) {
        for (let j = 0; j < courses[i].array_alumns.length; j++) {
            if (courses[i].array_alumns[j].student_id == targetStudentId) {
                courses[i].array_alumns[j].attendance_entrys.push(newEntry);
                console.log(courses[i].array_alumns[j].attendance_entrys);
            }
        }
    }
}


const students = [

    {
        student_id: 1,
        student_name: '5555Daniel',
        student_lastname: 'Chavez',
        attendance_entrys: []
    },
    {
        student_id: 2,
        student_name: '555David',
        student_lastname: 'Cappelluti',
        attendance_entrys: [
            
        ]
    },
    {
        student_id: 3,
        student_name: ' 555Rayen',
        student_lastname: 'Millahual',
        attendance_entrys: []
    },
    {
        student_id: 4,
        student_name: '555Alexander',
        student_lastname: ' Gonzalez',
        attendance_entrys: []
    },
    {
        student_id: 5,
        student_name: '555juanito',
        student_lastname: 'Perez',
        attendance_entrys: []
    },
    {
        student_id: 6,
        student_name: '666Daniel',
        student_lastname: 'Chavez',
        attendance_entrys: []
    },
    {
        student_id: 7,
        student_name: '666David',
        student_lastname: 'Cappelluti',
        attendance_entrys: []
    },
    {
        student_id: 8,
        student_name: ' 666Rayen',
        student_lastname: 'Millahual',
        attendance_entrys: []
    },
    {
        student_id: 9,
        student_name: '666Alexander',
        student_lastname: ' Gonzalez',
        attendance_entrys: []
    },
    {
        student_id: 10,
        student_name: '666juanito',
        student_lastname: 'Perez',
        attendance_entrys: []
    }
   
]

export { courses, students, assignNewEntry };