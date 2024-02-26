function createTable() {
    //Write your code here
	let rows = prompt("input number of rows");
	let columns = prompt("input number of columns");
	let myTable = document.querySelector("#myTable");
	for(let i=0;i<rows;i++){
		let tr = document.creatElement("tr");
		for(let j=0;j<columns;j++){
			let td = document.creatElement("td");
			td.innerText = `Row-{$i} Column-{$j}`
			tr.appendChild(td);
		}
		myTable.appendChild(tr);
	}
  
}
