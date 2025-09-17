"use client";
import {Card,CardHeader,CardTitle} from "@/src/components/ui/card";

export default async function Error(){
    await new Promise((r)=>setTimeout(r, 1000) );
    throw Error();
    return(
        <Card>
            <CardHeader>
                <CardTitle>Error </CardTitle>
            </CardHeader>
        </Card>
    )
}