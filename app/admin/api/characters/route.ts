import {NextResponse, NextRequest} from "next/server";

export async function GET(){
    return NextResponse.json({
        ok: true, 
        env: process.env.NODE_ENV, 
    });
}

export async function POST(request: NextRequest){
    const formData = await request.formData(); 
    const data = {
        character: formData.get("character"),
        title: formData.get('title'),
    }

    return NextResponse.json({
        json: data , 
    });
}