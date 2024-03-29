import Swal from 'sweetalert2'

export const alert = (messageTittle,message)=>Swal.fire({
    title: messageTittle,
    html: message,
    timer: 3000,
    timerProgressBar: true,
    })

export const error = (messageTittle,message)=>Swal.fire({
    title: messageTittle,
    html: message,
    timer: 3000,
    timerProgressBar: true,
    })

//funcion para mostrar la descripcion en un POP UP
export const desc = (messageTittle,message)=>Swal.fire({
    title: messageTittle,
    html: message,
    timer: 100000,
    timerProgressBar: true,
    })