let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
let mySelect = document.querySelector("#mySelect");

for (const country in countries) {
    if (Object.hasOwnProperty.call(countries, country)) {
        const element = countries[country];
        let elem = document.createElement("option");
        elem.value = element;
        elem.text = element;
        mySelect.appendChild(elem);
    }
}


mySelect.addEventListener("change", function() {
	//your code here
    let element = document.querySelector("#mySelect");
    alert(element.value);
});