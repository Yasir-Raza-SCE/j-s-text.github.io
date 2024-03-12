function checkword() {
    const text ="Lorem ipsum dolor sit, amet consectetur adipisicing elit. In illo deserunt facilis quisquam vel consequuntur sed hic pariatur numquam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, accusamus.";
    var texttocheck = prompt("Enter the text to search");

    if (text.toLowerCase().includes(texttocheck.toLowerCase())) {
        alert("Text Has Been Found.")
    }else{
        alert("Text Has Not Been Found.");
    }
}
