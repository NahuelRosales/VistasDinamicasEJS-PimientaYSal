let { getMenu } = require('../database/dataBase') 

let controller = {
    
    detalleMenu: (req, res) => {
        let menuId = +req.params.id;
        let menu = getMenu.find(menu => menu.id === menuId)
        
        
        if (menu !== undefined) {


            res.render(`detalleMenu`, {
                menu
            })
            
        } else {
            res.send(`UPS! este plato no está disponible. Aún... 
            </br>
            <a href="/#menu"">Volver y ver menú</a>
    `)
        }

    } ,

}

module.exports = controller