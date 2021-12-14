function photoFactory(data) {
    const { id, name, portrait, city, country, tagline } = data;

    const picture = `assets/photographers/${portrait}`;
    console.log(picture)

    function getPhotoDetailsCardDOM() {
        const link = `photographer.html?id=${id}`;
        const articlePhotographer = document.createElement( 'article' );
        const img = document.createElement('img');
        const h1 = document.createElement( 'h1' );
        const pLink = document.createElement('p');
        const p = document.createElement( 'p' );
        const pun = document.createElement( 'p' );
        const pdeux = document.createElement( 'p' );
        
        img.classList.add('photographer-img');
        p.classList.add('tagline')
        pun.classList.add('city-country')

        img.setAttribute("src", picture);

        p.innerHTML = tagline;
        pLink.innerHTML = link;
        h1.innerText = name;
        pun.innerText = city +','+' '+ country;
        pdeux.innerText = country;

        articlePhotographer.appendChild(h1);
        articlePhotographer.appendChild(img);
        articlePhotographer.appendChild(pun);
        articlePhotographer.appendChild(p);

        console.log(articlePhotographer)

        return (articlePhotographer);
    }

    return { id, name, picture, getPhotoDetailsCardDOM}
}

function mediaFactory(medias) {
    const { photographerId, image, likes, title } = medias;

    const imgMedia = `assets/images/${image}`;
    console.log(imgMedia)

    function getMediaCardDOM(){
        const articleMedia = document.createElement('article');
        const img = document.createElement('img');
        const pun = document.createElement('p');
        const pdeux = document.createElement('p');

        img.classList.add('mediaImg');
        pun.classList.add('likes');
        pdeux.classList.add('title');

        pdeux.innerHTML = title;
        pun.innerHTML = likes;
        
        img.setAttribute("src", imgMedia);

        articleMedia.appendChild(img);
        articleMedia.appendChild(pun);
        articleMedia.appendChild(pdeux);
        
        return (articleMedia);
    }

    return { photographerId, getMediaCardDOM }
}