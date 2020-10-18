const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db =>{
    // insert
    // await saveOrphanage (db, {
    //     lat: -27.28,
    //     lng: -49.36,
    //     name: "Lar Meninos",
    //     about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
    //     whatsapp: "4664634",
    //     images: [
    //         "https://images.unsplash.com/photo-1602979731574-78238760b7b1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

    //         "https://images.unsplash.com/photo-1570077231368-7f7f469b1561?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //     oppening_hours: "Horário de visitas Das 18h até 8h",
    //     open_on_weekends: "0"
    // })
    
    // query
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log (selectedOrphanages)

    // query por id
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    // console.log ("bvpsdiffvb")
    // console.log (orphanage)

    // delete by id
    // console.log (await db.run('DELETE FROM orphanages WHERE id="2"'))
})