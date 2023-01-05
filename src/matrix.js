const cheerio = require("cheerio")

function getMatrix(){
    matt1 = []
    m1 = []
    unknowns = Number(window.localStorage.getItem("unknowns"));

    for (let i = 1; i <= unknowns; i++) {
        for (let j = 1;j<=unknowns;j++){
            m1.push(Number(document.getElementById("t"+i+j).value));
            if (m1.length == unknowns){
                matt1.push(m1);
                m1 = []
            }}
        }
    
    matt2 = []
    m2 = []
    for (let i=1;i<=unknowns;i++){
        m2.push(Number(document.getElementById("b"+i).value));
        if (m2.length==1){
            matt2.push(m2);
            m2 = [];
        }
    }

    console.log(matt1);
    console.log(matt2);

    const loader = document.getElementById("loader");
    const container1 = document.getElementById("container");
    const container3 = document.getElementById("container3")
    const type = document.getElementById("type")
    const solution_matrix = document.getElementById("solution_table")

    container1.classList.add("block");
    loader.classList.add("show");
    fetch("https://linalgsolve.up.railway.app/solver/"+JSON.stringify(matt1)+"/"+JSON.stringify(matt2))
    .then(res=>{
        if (res.ok){
            return res.json()
        }else{
            console.log("ERROR")
        }
    })
    .then(data=>{
        loader.classList.remove("show")
        container3.classList.remove("block")
        const rowech = document.getElementById("rowech");
        type.innerHTML = data[0];
        console.log(data)
        if (data[2]==0){
            rowech.classList.add("hide");
        }
        for (let i=0;i<data[1].length;i++){
            var row = solution_matrix.insertRow(i);
            for (let j=0;j<data[1][0].length;j++){
                cell = row.insertCell(j);
                if (j==data[1][0].length-1){
                    cell.style.paddingLeft = "20px";
                }
                textEl = document.createElement('input');
                textEl.type = "text";
                textEl.readOnly = true;
                textEl.id = "t"+(i+1)+(j+1);
                textEl.value = data[1][i][j];
                cell.appendChild(textEl);
            }
        }
    })
};