const getRepos = async () => {
    return fetch("https://api.github.com/users/kevinbai0/repos")
        .then(res => res.json())
        .then(json => {
            return json
        })
}

export default getRepos()
