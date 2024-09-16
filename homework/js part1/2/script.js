let count = +prompt();
for(let i = 0; i < count; i++){
    let color;
    if(i % 3 === 0){
        color = 'red'
    }else if(i % 3 === 1){
        color = 'green'
    }else{
        color = 'blue'
    }
    document.write(`<div style='background-color: ${color}; width:200px; height:200px; display:block; margin:5px'></div>`)
}