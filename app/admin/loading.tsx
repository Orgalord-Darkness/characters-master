import {Card,CardHeader,CardTitle} from "@/src/components/ui/card";
export default async function Loading(){
    await new Promise((r)=>setTimeout(r, 1000) );
    return(
        <Card>
            <CardHeader>
                <CardTitle>Loading ....</CardTitle>
            </CardHeader>
        </Card>
    )
}