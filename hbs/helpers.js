const hbs=require('hbs');

hbs.registerHelper('Producto1', (i)=>{
    let fs=require('fs');
    let producto=fs.readFileSync('./json/Productos.json', 'utf8');
    var words=JSON.parse(producto);
    if(i==1){
        return words[0].Producto1;
    }else{
        return words[0].Valor1;
    }
});

hbs.registerHelper('Producto2', (i)=>{
    let fs=require('fs');
    let producto=fs.readFileSync('./json/Productos.json', 'utf8');
    var words=JSON.parse(producto);
    if(i==1){
        return words[1].Producto2;
    }else{
        return words[1].Valor2;
    }
});

hbs.registerHelper('Producto3', (i)=>{
    let fs=require('fs');
    let producto=fs.readFileSync('./json/Productos.json', 'utf8');
    var words=JSON.parse(producto);
    if(i==1){
        return words[2].Producto3;
    }else{
        return words[2].Valor3;
    }
});