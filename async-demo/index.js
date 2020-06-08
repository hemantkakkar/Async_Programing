console.log('Before');

//callback Hell

// getUser(1, (user) => {
//     getRepositories((repos) => {
//         console.log(repos);
//     });
// });

// Promises 

// getUser(1)
//     .then((user) => getRepositories())
//     .then((repos) => console.log(repos))
//     .catch((error) => console.log(error.message));

// Async Await

async function displayRepos () {
    try {
        const user = await getUser(1);
        const repos = await getRepositories();
        
        console.log(repos);
    }
    catch(err) {
        console.log('Error', err.message);
    }
}
displayRepos();


console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from database');
            resolve({
                id: id,
                githubUserInfo: 'test'
            })
        }, 2000);
    })
}

function getRepositories() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Github API');
            resolve(['repo1', 'repo2']);
        }, 2000);
    })
}