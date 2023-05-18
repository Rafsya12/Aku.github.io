let id = null
    const makeVariable = (id)=>{
        eval(`const ${id} = document.querySelector("#${id}")`)
}
    const input = (id, type='text', label='', placeholder='')=>{
        return `
        <div class="bab"
            <label>${label}</label><br>
            <input type="${type}" id="${id}" placeholder="${placeholder}"><br>
        </div>
            `
    makeVariable(id)
}
    const button = (id,label)=>{
        return `<button id="${id}" style="margin-left: 5px; margin-top: 10px; background-color: blue; color: white;">${label}</button>`
    makeVariable
}
    const div = (id)=>{
        return `<div id="${id}"></div>`
    makeVariable(id)
}
    const editData = (index)=>{
        nama.value = data[index].nama
        nis.value = data[index].nis
        kelas.value = data[index].kelas
        jurusan.value = data[index].jurusan
        alamat.value = data[index].alamat
        id = index
}
    const deleteData = (index)=>{
        data.splice(index, 1)
    loadData(data,dataList)
}

    const loadData1 = (data, element)=>{
        element.innerHTML =''
    let i = 0
        data.forEach(item => {
            element.innerHTML += `
                <table border="1" cellpading="4" cellspacing="0" style="margin-top: 20px; color: black;">
                    <tr style="background-color: white;">
                        <th style="width:199px;">Nama</th>
                        <th style="width:199px;">Nis</th>
                        <th style="width:200px;">Kelas</th>
                        <th style="width:200px;">Jurusan</th>
                        <th style="width:203px;">Alamat</th>
                        <th colspan="2" style="width:248px;">Pilihan</th>
                    </tr>
                </table>           
            `
        i++
    });
}
const loadData = (data, element)=>{
    element.innerHTML =''
let i = 0
    data.forEach(item => {
        element.innerHTML += `
            <table border="1"  cellpading="4" cellspacing="0" style="margin-top: -2px;">
                <tr align="center">
                    <td style="width:200px;">${item.nama}</td>
                    <td style="width:200px;">${item.nis}</td>
                    <td style="width:200px;">${item.kelas}</td>
                    <td style="width:200px;">${item.jurusan}</td>
                    <td style="width:200px; height:50px;">${item.alamat}</td>
                    <td style="width:120px;"><button onclick="editData(${i})" style="background-color: skyblue; color: black;">Edit</button></td>
                    <td style="width:120px;"><button onclick="deleteData(${i})" style="background-color: skyblue; color:black;">Reset</button>
                </tr>
            </table>           
        `
    i++
});
}
    const clear = ()=>{
        nama.value = null
        nis.value = null
        kelas.value = null
        jurusan.value = null
        alamat.value = null
        id = null 
}
    let data = [
        {
            'nama':'Munawwarah',
            'nis':'210202',
            'kelas':'XI',
            'jurusan':'RPL',
            'alamat':'Tinambung'

        }
]
    document.body.innerHTML += input('nama','text','Nama','Masukan Nama')
    document.body.innerHTML += input('nis','number','Nis','Masukan Nis')
    document.body.innerHTML += input('kelas','text','Kelas','Masukan kelas')
    document.body.innerHTML += input('jurusan','text','Jurusan','Masukan Jurusan')
    document.body.innerHTML += input('alamat','text','Alamat','Masukan Alamat')
    document.body.innerHTML += button('btnSimpan','Simpan')
    document.body.innerHTML += button('btnClear','Clear')
    document.body.innerHTML += div('judul')
    document.body.innerHTML += div('dataList')
    loadData1(data, judul)
    loadData(data, dataList)
    btnClear.addEventListener('click',()=>{
        clear()
    })
        btnSimpan.addEventListener('click', ()=>{
        if(id == null){
        data.push({
            'nama': nama.value,
            'nis': nis.value,
            'kelas': kelas.value,
            'jurusan': jurusan.value,
            'alamat': alamat.value
        })
            clear()
        }else{
            data[id].nama = nama.value
            data[id].nis = nis.value
            data[id].kelas = kelas.value
            data[id].jurusan = jurusan.value
            data[id].alamat = alamat.value
        }
        loadData(data,dataList)
    })