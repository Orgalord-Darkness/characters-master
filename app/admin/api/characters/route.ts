import {NextResponse, NextRequest} from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function GET(){
    return NextResponse.json({
        ok: true, 
        env: process.env.NODE_ENV, 
    });
}

export async function POST(request: NextRequest){

    const json = await request.json();

    console.log("Reçu",json);

    await new Promise((r) => setTimeout(r,1000));

    const newCharacter = await prisma.character.create({
        data : {
            name: json.character, 
            Title: json.title, 
        },
    });

    return NextResponse.json({
        character: newCharacter , 
    });
}

