"use client";

import { Button } from "@/src/components/ui/button";
import { useState } from "react";
import { deleteCharacterAction } from "./newServer/characters.action";
import { useRouter } from "next/navigation";

export function DeleteCharacterButton(props:{id: number}){
    const [isConfirm, setIsConfirm] = useState(false);
    const router = useRouter();
    
    const onDelete = async () => {
        const result = await deleteCharacterAction(props.id)
        if(result.message){
            router.refresh(); 
        }
    }

    return (
    <Button 
    onClick={() => {
        if(isConfirm){
            onDelete();
        }else{
            setIsConfirm(true);
        }
    }} 
    variant={isConfirm ? "destructive" : "outline"}
    >
        🗑️
    </Button>

    )
}