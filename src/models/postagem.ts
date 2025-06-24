import type Tema from "./tema";
import type Usuario from "./Usuario";

export default interface Postagem {
    id: number;
    titulo: string;
    texto: string;
    data: string;
    tema: Tema | null;
    ususario: Usuario | null;
}