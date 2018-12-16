function temParam(param) {
    console.log(process.argv)
    return process.argv.indexOf(param) !== -1
}

if(temParam('--producao')) {
    console.log('tem')
} else {
    console.log('nao')
}
