import * as jwt from "@4zeroiv/jwt"

export const runtime = 'edge'

const secret = process.env.SECRET
console.log(secret)

export default async function handler(req: Request) {
    const body = await req.json()
    const token = await jwt.sign(body.payload, secret ?? '', body.alg)

    return new Response(JSON.stringify({ token }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
}