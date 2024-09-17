let log = new Log(document.querySelector('.log'))
let char = new Knight('Luiz')
let monster = new bigMonster()

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)

stage.start()