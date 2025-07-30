import { NextResponse } from "next/server"

type params ={
    username: string
}
export async function GET(request: Request, {params}: {params: params}) {
    const {username} = params
    return NextResponse.json({username})
}



