import Image from "next/image";
import { Card, CardHeader, CardTitle,CardContent} from "@/src/components/ui/card"; 
import { Button, buttonVariants} from "@/src/components/ui/button"; 
import Link from "next/link";
export default async function Page(){
    // await new Promise((r)=>setTimeout(r, 1000) );
    // throw new Error("Invalid");
  return (
    <div className="">    
      <Card>
        <CardHeader>
          <CardTitle>
            <Link 
            className={buttonVariants({size: "lg", variant: "outline"})}
            href="/admin/characters/1?search=Alastor"> 
                Perso 1 
            </Link>
             <Link 
            className={buttonVariants({size: "lg", variant: "outline"})}
            href="/admin/characters/2?searh=Pandellahilde+Wintersweild"> 
                Perso 2
            </Link>
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  )
}