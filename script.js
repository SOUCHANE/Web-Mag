fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const mag = data.mag;

        // Header
        document.getElementById('logo').textContent = mag.nomMag;
        let navMenu = document.getElementById('nav-menu');
        mag.themes.forEach(theme => {
            let link = document.createElement('a');
            link.href = '#'; 
            link.textContent = theme.nom;
            navMenu.appendChild(link);
        });
        document.getElementById('texte-appel-action').textContent = mag.texteAppelAction;



        // Nom du magazine
        document.getElementById('nom-magazine').textContent = mag.nomMag;

        // Phrase d'accroche
        document.getElementById('phrase-accroche').textContent = mag.phraseAccroche;

        // Thèmes et leurs descriptions
        let themesContainer = document.getElementById('themes-container');
        mag.themes.forEach(theme => {
            const themeDiv = document.createElement('div');
            themeDiv.className = 'theme';
            themeDiv.innerHTML = `
                <h3>${theme.nom}</h3>
                <p>${theme.description}</p>
            `;
            themesContainer.appendChild(themeDiv);
        });

        // Image principale
        let heroImage = document.getElementById('hero-image');
        heroImage.src = mag.mainPrincipal.image;
        heroImage.alt = "Image principale";



        // Section "Article Plus Récent"
        let latestArticle = mag.mainPrincipal;

        // Titre de la section
        document.getElementById('latest-article-title').textContent = "Article Plus Récent";

    
        document.getElementById('latest-article-meta').textContent = `${latestArticle.theme} - ${latestArticle.date}`;

        // Description de l'article
        document.getElementById('latest-article-description').textContent = latestArticle.description;

        // Bouton "Lire l'article"
        let articleButton = document.getElementById('latest-article-button');
        articleButton.textContent = "Lire l'article";
        articleButton.onclick = () => {
        
            window.open("#", "_blank");
        };



        // Section Articles
        let articlesContainer = document.getElementById('articles-container');

    
        mag.articles.forEach(article => {
            let articleDiv = document.createElement('div');
            articleDiv.className = 'article-item';
            
            articleDiv.innerHTML = `
                <img src="${article.image}" alt="${article.titre}">
                <div class="article-content">
                    <h3>${article.titre}</h3>
                    <p class="article-meta">${article.theme} - ${article.date}</p>
                    <p>${article.description || "Description non disponible."}</p>
                    <a href="#" class="read-more">Lire l'article</a>
                </div>
            `;
            
            articlesContainer.appendChild(articleDiv);
        });



        // Team Section
        let teamContainer = document.getElementById('team-container');
        mag.auteurs.forEach(auteur => {
            const authorDiv = document.createElement('div');
            authorDiv.className = 'team-member';
            authorDiv.innerHTML = `
                <img src="${auteur.image}" alt="${auteur.name}">
                <h3>${auteur.prenom}</h3>
                <p>${auteur.typeExperience}</p>
                <p>${auteur.presentation}</p>
            `;
            teamContainer.appendChild(authorDiv);
        });
    })
    
    .catch(error => {
        console.error('Erreur lors du chargement des données JSON :', error);
    });


