function mediaFactory(data) {
    const { id, name, portrait, city, country, tagline } = data;

    const picture = `assets/photographers/${portrait}`;
    console.log(picture)

    function getPhotoDetailsCardDOM(id) {
        const link = `photographer.html?id=${id}`;
        console.log(link);
        const articlePhotographer = document.createElement( 'article' );
        const img = document.createElement('img');
        img.classList.add('photographer-img');
        const h1 = document.createElement( 'h1' );
        const pLink = document.createElement('p');
        pLink.innerHTML = link;
        /*const p = document.createElement( 'p' );
        p.classList.add('tagline')
        const pun = document.createElement( 'p' );
        pun.classList.add('city-country')
        const pdeux = document.createElement( 'p' );
        p.textContent = tagline;*/
        img.setAttribute("src", picture);
        h1.innerText = name;
        /*pun.innerText = city +','+' '+ country;
        pdeux.innerText = country;*/
        articlePhotographer.appendChild(pLink);
        articlePhotographer.appendChild(h1);
        articlePhotographer.appendChild(img);
        /*article.appendChild(pun);
        article.appendChild(p);*/
        return (articlePhotographer);
    }
    return { id, name, picture, getPhotoDetailsCardDOM }
}