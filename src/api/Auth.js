export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email
    }
    fetch(`https://cloud-kitchen-server-iota.vercel.app/jwt`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('cloud-token', data.token)
        })
}