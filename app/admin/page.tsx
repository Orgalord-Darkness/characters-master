import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/src/components/ui/card"; 
import { Button, buttonVariants } from "@/src/components/ui/button"; 
import Link from "next/link";
import { prisma } from "@/src/lib/prisma";
import { DeleteCharacterButton } from "./characters/delete-characters-button";

export default async function Page() {
  const characters = await prisma.character.findMany({
    orderBy: {
      CreatedAt: "asc",
    },
  });

  return (
    <div className="mt-10">
      <Card>
        <CardHeader>
          <CardTitle>List of characters</CardTitle>
        </CardHeader>
         <CardContent className="flex flex-row gap-4 flex-wrap">
          {characters.map((character) => (
            <Card className="p-4 w-full sm:w-[300px]" key={character.id}>
              <div className="flex justify-between items-start">
                {/* Infos personnage à gauche */}
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">{character.name}</p>
                  <p className="text-sm text-muted-foreground">{character.Title}</p>
                </div>

                {/* Boutons à droite */}
                <div className="flex gap-2">
                  <Link
                    href={`/admin/characters/${character.id}`}
                    className={buttonVariants({ size: "sm", variant: "outline" })}
                    title="Edit character"
                  >
                    🖊️
                  </Link>
                  <DeleteCharacterButton id={character.id} />
                </div>
              </div>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
