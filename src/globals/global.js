import {assignNewEntry} from '../data/testdata'

//Funcion que puede ser accedida desde global, se utiliza para
//introducir una nueva entry a la bd
export default function newAttendanceEntry(attendanceEntry){
    assignNewEntry(attendanceEntry);
}
