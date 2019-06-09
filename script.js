const masks = {
    cpf(value) {
       console.log(value)
       return value.replace(/\D/g,'')
       .replace(/(\d{3})(\d)/,'$1.$2')
       .replace(/(\d{3})(\d)/,'$1.$2')
       .replace(/(\d{3})(\d{1,2})/,'$1-$2')
       .replace(/(-\d{2})\d+?$/,'$1')
    },
    cnpj(value) {
        return value.replace(/\D/g,'')
        .replace(/(\d{2})(\d)/,'$1.$2')
        .replace(/(\d{3})(\d)/,'$1.$2')
        .replace(/(\d{3})(\d)/,'$1/$2')
        .replace(/(\d{4})(\d)/,'$1-$2')
        .replace(/(-\d{2})\d+?$/,'$1')
    },
    phone(value) {
        return value.replace(/\D/g,'') 
        .replace(/(\d{2})(\d)/,'($1) $2')
        .replace(/(\d{4})(\d)/,'$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/,'$1$2-$3')
        .replace(/(-\d{4})\d+?$/,'$1')
    },
    cep(value) {
        return value.replace(/\D/g,'') 
        .replace(/(\d{5})(\d)/,'$1-$2')
        .replace(/(-\d{3})\d+?$/,'$1')
    },
    pis(value){
        return value.replace(/\D/g,'') 
        .replace(/(\d{3})(\d)/,'$1.$2')
        .replace(/(\d{5})(\d)/,'$1.$2')
        .replace(/(\d{5}\.)(\d{2})(\d)/,'$1$2-$3')
        .replace(/(-\d)\d+?$/,'$1')
    }
}

document.querySelectorAll('input')
.forEach($input => {
    let field = $input.dataset.js
    $input.addEventListener('input',(e) => {
       e.target.value = masks[field](e.target.value)
    })
})

//my first version
// cep(value) {
//     return value.replace(/\D/g,'') 
//     .replace(/(\d{5})/,'$1-')
//     .replace(/(\d{3})/,'$1')
//     .replace(/(-\d{3})\d+?$/,'$1')
// }