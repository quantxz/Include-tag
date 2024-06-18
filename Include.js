class Include {
    ReadHTML(typeValue) {
        const elements = document.querySelectorAll(`[type="${typeValue}"]`);
        elements.forEach(element => {
            this.LoadHTML(element.getAttribute('src'), element)
        });
    }

    LoadHTML(url, element) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao carregar o HTML:', response.statusText);
                }
                return response.text();
            })
            .then(data => {
                element.innerHTML = data
                setTimeout(() => {
                    const exportElement = document.querySelector('[type="export"]');
                    element.innerHTML = ''
                    exportElement.childNodes.forEach(childNode => {
                        element.appendChild(childNode.cloneNode(true))
                    })
                }, 1)
            })
            .catch(error => {
                console.error('Erro ao carregar o HTML:', error);
            });
    }
}
