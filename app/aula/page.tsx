import { redirect } from "next/navigation"

// A aula aberta de 18/11 foi cancelada: /aula leva para a pagina do curso.
export default function Page() { redirect("/cursos/filmes-com-ia") }
