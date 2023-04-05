import { Titulo } from "../Titulo/Titulo"

export const Formulario = () => {
    let titulo= 'Formularioo'
    let subTitulo = 'Formularioo'
    return <section>
        <Titulo titulo={titulo} subTitulo={subTitulo}/>
        <form >
        <input type="text" name="" />
        <input type="text" name="" />
        <input type="text" name="" />

        </form>
    </section>
}

