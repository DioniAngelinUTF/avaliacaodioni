import { getAllTeacher} from "@/app/model/TeacherService";
export const revalidate = 0
export default async function TeacherPage(){
    
     const teachers = await getAllTeacher();
    return (
        <>
         <h1> Lista de Professores</h1>
         <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                {teachers.map( => (  

                <tr key={teachers.id}> <td>{teachers.name}</td> <td>{teachers.email}</td> <td><a href={`/admin/teacher/edit?id=${teachers.id}`}>Editar</a></td> </tr>

                ))}
            </tbody>
         </table>
        </>
       
    )
}