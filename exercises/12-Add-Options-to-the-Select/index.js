let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
let mySelect = document.querySelector("#mySelect");

for (const country in countries) {
    if (Object.hasOwnProperty.call(countries, country)) {
        const myOption = countries[country];
        let element = document.createElement("option");
        element.value = myOption;
        element.text = myOption;
        mySelect.appendChild(element);
    }
}


mySelect.addEventListener("change", function() {
	//your code here
    let element = document.querySelector("#mySelect");
    alert(element.value);
});