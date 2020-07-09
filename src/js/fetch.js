export const repositoryList = document.querySelector('.repos-list--js')

fetch('https://api.github.com/users/tomek-zawadzki/repos?sort=created&direction=asc')
    .then(resp => resp.json())
    .then(resp => {
        for (let repo of resp) {
            const {name, html_url} = repo;
            const repositoryList = document.querySelector('.repos-list--js');
            const myTemplate = `<li> ${name} <a href="${html_url}" title="link do repozytorium na GitHubie" style="color: #e0ff4f">link do GitHuba</a></li>`;
            repositoryList.innerHTML += myTemplate
        }
    })