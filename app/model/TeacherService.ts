import { sql } from "@vercel/postgres";

export async function getAllTeacher(){
    const { rows:Teachers } = await sql`SELECT * from teacher;`;
    return Teachers
}
export async function addTeacher(name:string, email:string){
    await sql`INSERT INTO teacher (name, email) VALUES (${name}, ${email})`;
}
export async function deleteTeacherById(id: string){
    await sql`DELETE FROM teacher WHERE id=${id}`;
}
export async function getTeacherById(id:string){
   const {rows:Teachers} = await sql`SELECT * FROM teacher WHERE id=(${id})`
   return Teachers[0]
}
export async function updateTeacherById(id:string, name:string, email:string){
    await sql`UPDATE teacher SET name=${name}, email=${email} WHERE id=${id}`
}
