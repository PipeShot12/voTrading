async function serviceSend(data) {
    const req = await fetch(process.env.REACT_APP_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(data)
    });
    return req
}
export default serviceSend