const logger = require('./controller/main_controller')
const stock = require('./stock.json')
const config = require('./config.json')

const steps = {
    acceptOrder: {
        time: 2000,
        proceedure: ()=> {console.log("Accepted order...")}
    },
    cutFruit: {
        time: 2000,
        proceedure: ()=> {console.log("Cutting fruit...")}
    },
    addWaterIce: {
        time: 1000,
        proceedure: ()=> {console.log("Adding ice and water")}
    },
    startMachine: {
        time: 1000,
        proceedure: ()=> {console.log("Starting the machine...")}
    },
    selectContainer: {
        time: 2000,
        proceedure: ()=> {console.log("Selecting container...")}
    },
    selectToppings: {
        time: 3000,
        proceedure: ()=> {console.log("Selecting toppings...")}
    },
    serveIceCream: {
        time: 2000,
        proceedure: ()=> {console.log("Serving ice cream...")}
    }
}

function setTime(time){
    return new Promise((resolve, reject) => {
        if(!config.isShopOpen){
            reject(new Error('fail'))
        }
        
        setTimeout(resolve, time)
    })
}

async function runKitchen(){
    try{
        // console.log(`${stock.fruits[0]}`)
        for(const[key, value] of Object.entries(steps)){
            await setTime(value.time)
            value.proceedure() 
        }

    }catch(error){
        console.log("Unable to complete order.")
    }finally{
        console.log("Day ended.")
    }
}

runKitchen()
