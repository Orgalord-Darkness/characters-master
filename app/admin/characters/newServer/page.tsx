"use client";

import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Button } from "@/src/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/src/components/ui/card";
import { prisma } from "@/src/lib/prisma"; // Assure-toi que le chemin est correct
import { createCharacterAction, updateCharacterAction } from "./characters.action";
import { useFormStatus } from "react-dom";
import { Character } from "@prisma/client";

// ✅ Composant React Server Component
export default function CharacterForm(props: {character?: Character}) {
  const onSubmit = async (FormData: FormData) => {
    let error:  null | string = null; 
    if(props.character){
      const json = await updateCharacterAction(props.character.id, {
        name: String(FormData.get('name')),
        Title: String(FormData.get('title'))
      });
      error = json.error

    }else{
      const json = await createCharacterAction({
        name: String(FormData.get('name')),
        Title: String(FormData.get('title'))
      });
      error = json.error
    }

    if(error){
      alert(error);
    }
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>(props.character ? "Updated" : "Create") a character Server</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={async (formData) => {await onSubmit(formData)}} className="flex flex-col gap-2">
          <Label>
            Character
            <Input defaultValue={props.character?.name} name="name" required />
          </Label>
          <Label>
            Title
            <Input defaultValue={props.character?.Title} name="title" required />
          </Label>
          <SubmitButton/>
        </form>
      </CardContent>
    </Card>
  );
}

const SubmitButton = () => {
  const {pending} = useFormStatus(); 

  return (
    <Button disabled={pending} type="submit">
        {pending ? "Loading..." : "Submit"}
    </Button>
  )
}
