
export const verifyToken = async (user) => {
    const currentUser = { user: user.email };
    console.log(currentUser)
    try {
        const res = await fetch('https://wildography-server.vercel.app/jwt', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })

        const data = await res.json();
        localStorage.setItem("token", data.data)
        return data;

    } catch (error) {
        console.error(error)
    }
}