function createTable() {
    //Write your code here
	let rows = prompt("Input number of rows");
	let columns = prompt("Input number of columns");
	let myTable = document.querySelector("#myTable");
	for(let i=0;i<rows;i++){
		let tr = document.createElement("tr");
		for(let j=0;j<columns;j++){
			let td = document.createElement("td");
			td.innerText = `Row-${i} Column-${j}`
			tr.appendChild(td);
		}
		myTable.appendChild(tr);
	}
  
}
