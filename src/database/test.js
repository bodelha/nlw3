const Database = require('./db');

Database.then(async db =>{
    // insert
    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            oppening_hours,
            open_on_weekends
        ) VALUES (
            "-27.22",
            "-49.65",
            "Ldhgjmhfhs",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
            "64476943623",
            "https://images.unsplash.com/photo-1602622931974-78228760b7b1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horário de visitas Das 18h até 8h",
            "1"
        )
    `)
    // query
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log (selectedOrphanages)
})