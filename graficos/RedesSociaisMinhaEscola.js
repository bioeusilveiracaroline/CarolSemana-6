async function redesSociaisFavoritasMinhaEscola() {
    const url = 'https://script.google.com/macros/s/AKfycbyKYNv1Fam_iDtd-Yhxfu1hthqJp7ovnpNRHrAc6CE_LftiewWXUgCLiZkhxGS1yg22/exec'
    const dados = await res.json()

    const redesSociais = dados.slice(1).map(redes => redes[1])
    console.log(redesSociais)
}

redesSociaisFavoritasMinhaEscola()