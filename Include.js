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
                element.innerHTML = data;

                setTimeout(() => {
                    const exportElement = document.querySelector('[type="export"]');
                    const exportStyleLinks = document.querySelectorAll('[type="ExportStyle"]');

                    // Limpa o conteúdo atual de element
                    element.innerHTML = '';
                    if (exportStyleLinks) {
                        const headElement = document.createElement('head');
                        exportStyleLinks.forEach(link => {
                            headElement.appendChild(link.cloneNode(true));
                        })
                        element.appendChild(headElement);
                    }

                    // Adiciona os filhos de exportElement
                    exportElement.childNodes.forEach(childNode => {
                        element.appendChild(childNode.cloneNode(true));
                    });
                }, 1);
            })
            .catch(error => {
                console.error('Erro ao carregar o HTML:', error);
            });
    }
}
