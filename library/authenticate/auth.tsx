import {setToken} from "@/library/authenticate/token";
export async function authenticateUser(user: string, password: string) {
    const res = await fetch(`${process.env.MENTAL_API_URL}/login`, {
        method: 'POST',
        body: JSON.stringify({
            userName: user, password: password
        }),
        headers: {
            'content-type': 'application/json',
        },
    });

    const data = await res.json();

    if (res.status === 200) {
        setToken(data.token);
        return true;
    } else {
        throw new Error(data.message);
    }
}