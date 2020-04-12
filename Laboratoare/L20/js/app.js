

function renameFile(fileName, width, height) {
    debugger;
    var caleSpartaDupaPunct = fileName.split('.');
    var extensie = caleSpartaDupaPunct.pop();
    var caleFisier = caleSpartaDupaPunct.pop();
    var caleFisierNou = caleFisier + '_' + width + 'x' + height + '.' + extensie;
    return caleFisierNou;
}