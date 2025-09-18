import { Card, CardHeader, CardTitle,CardContent} from "@/src/components/ui/card"; 
import CharacterForm from "../newServer/page";
import { prisma } from "@/src/lib/prisma";
export default async function Page(props: { 
    params: Promise<{
        characterId: string;
    }>
    searchParams: Promise<Record<string, string | string[]>>; 
}){
    const params = await props.params; 
    const searchParams = await props.searchParams; 
    const characterId = params.characterId

    const character = await prisma.character.findFirst({
        where: {
            id: Number(params.characterId)
        }
    }); 
    if(!character){
        <Card>
            <CardHeader>
                <CardTitle>
                        The characterId {characterId} does not exist.
                </CardTitle>
            </CardHeader>
        </Card>
    }

    return (
        <CharacterForm character={character ?? undefined} />
    )
}