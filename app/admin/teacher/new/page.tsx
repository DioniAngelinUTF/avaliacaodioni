import { getAllTeacher } from "@/app/model/TeacherService";

export default async function TeacherPage(){
     const Teachers = await getAllTeacher();
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
                {Teachers.map(teacher => (  

                <tr key={teacher.id}> <td>{teacher.name}</td> <td>{teacher.email}</td> <td><a href="/admin/teacher/edit">Editar</a></td> </tr>

                ))}
            </tbody>
         </table>
        </>
       
    )
}