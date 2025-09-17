import {Card,CardTitle,CardHeader,CardContent} from "./ui/card";
import {Button, buttonVariants} from "./ui/button";
import Link from "next/link";
export function Header(){
    return (
   <div className="">    
      <Card>
        <CardHeader>
          <CardTitle>
            Menu
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Link 
            className={buttonVariants({size: "lg", variant: "outline"})}
            href="/admin"> 
              Admin Characters
          </Link>
          <Link 
            className={buttonVariants({size: "lg", variant: "outline"})}
            href="/admin/characters/new"> 
              Add Characters
          </Link>
        </CardContent>
      </Card>
    </div>
    )
}