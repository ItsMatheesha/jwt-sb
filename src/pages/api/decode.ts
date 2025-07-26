import * as jwt from "@4zeroiv/jwt"

export const runtime = 'edge'

export default async function handler(req: Request) {
    const body = await req.json()
    const payload = await jwt.decodePayload(body.token)

    return new Response(JSON.stringify({ payload }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
}