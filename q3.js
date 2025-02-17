function wearPPE() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Wearing PPE'), 2000);
    })
}

function fightCorona() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Fighting Corona'), 1000);
    })
}

async function execute() {
    try {
        await wearPPE().then(result => console.log(result));
        await fightCorona().then(result => console.log(result));
    } catch (error) {
        console.log(error);
    }
}

execute();
