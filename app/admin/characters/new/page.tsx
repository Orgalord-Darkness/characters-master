import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Button } from "@/src/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/src/components/ui/card";
import { prisma } from "@/src/lib/prisma"; // Assure-toi que le chemin est correct

// ✅ Server Action - directement via Prisma (pas de fetch)
async function createCharacter(formData: FormData) {
  "use server";

  const character = formData.get("character")?.toString(); // ⚠️ .toString() (pas .ToString())
  const title = formData.get("title")?.toString();

  if (!character || !title) {
    console.error("Missing character or title");
    return;
  }

  try {
    await prisma.character.create({
      data: {
        name: character,
        Title: title,
      },
    });
    console.log("Character created successfully");
  } catch (error) {
    console.error("Error creating character:", error);
  }
}

// ✅ Composant React Server Component
export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add a character</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={createCharacter} className="flex flex-col gap-2">
          <Label>
            Character
            <Input name="character" required />
          </Label>
          <Label>
            Title
            <Input name="title" required />
          </Label>
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
}
