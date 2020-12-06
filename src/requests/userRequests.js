const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return await response.json()
}

export async function getUserByNameEmail(data){
    const userList = await getUsers()
    return userList.filter(user => user.email === data.email && user.username === data.username)[0]
}

export async function getUserById(id){
    const userList = await getUsers()
    return userList.filter(user => user.id === Number(id))[0]
}