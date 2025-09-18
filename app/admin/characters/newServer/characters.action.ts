"use server"; 

import { prisma } from "@/src/lib/prisma";
import { redirect } from "next/navigation";
import { json } from "stream/consumers";


export async function createCharacterAction(character : {
    name: string, 
    Title: string, 
}){
    try{
        const newCharacter = await prisma.character.create({
            data : {
                name: character.name, 
                Title: character.Title, 
            },
        });
    }catch{
        return {
            error: "Error while creating character",
        }
    }

    redirect("/admin");
}

export async function deleteCharacterAction(id: number){
    await prisma.character.delete({
        where: {
            id, 
        }
    }); 
    return {
        message: "Deleted !",
    }
}   

export async function updateCharacterAction(id: number,
    character: {
        name: string, 
        Title: string,
    }
){
    try{
         await prisma.character.update({
            where: {
                id, 
            }, 
            data : {
                name: character.name, 
                Title: character.Title, 
            },
        });
    }catch{
        return {
            error: "Error while creating character",
        }
    }

    redirect("/admin");
}   