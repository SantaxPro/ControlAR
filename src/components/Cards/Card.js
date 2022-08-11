import StudentCardVariant2 from "./StudentCardVariant2";
import StudentCardVariant1 from "./StudentCardVariant1";

//Sirve para mostrar a los estudiantes en dos pantallas distintas
//Para lograr eso utilizo un prop que define que componente va a retornar 
//la funcion
export function StudentCard(props) {
    if (props.variant == 2) {
        //Si el prop que la pasan es 2, devuelve la variante 2
        return <StudentCardVariant2 {...props}/>
    } else if(props.variant == 1) {
        //Si es 1, devuelvo la variante 1
        return <StudentCardVariant1 {...props}/>
    }
    //En caso de que no se especifique, ningun componente sera devuelto.
    return null
}