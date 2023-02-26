import Swal from 'sweetalert2'

export const alert = (messageTittle,message)=>Swal.fire({
    title: messageTittle,
    html: message,
    timer: 3000,
    timerProgressBar: true,
    })