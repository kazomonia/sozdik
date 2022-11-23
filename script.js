function search() {
    var el = document.getElementById('search')
    var list = document.getElementById('result-list')

    list.innerHTML = "";

    fetch('https://auyltaxi.kz/api/sozdik?q='+el.value)
        .then(res => res.json())
        .then(res => {
            for (const re of res) {
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(re));
                list.appendChild(li);
            }
        })
}
