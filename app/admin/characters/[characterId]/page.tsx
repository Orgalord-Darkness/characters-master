import { Card, CardHeader, CardTitle,CardContent} from "@/src/components/ui/card"; 
export default async function Page(props: { 
    params: Promise<{
        characterId: string;
    }>
    searchParams: Promise<Record<string, string | string[]>>; 
}){
    const params = await props.params; 
    const searchParams = await props.searchParams; 
    return (
        <div className="">    
        <Card>
            <CardHeader>
                <CardTitle>
                        {JSON.stringify(params, null, 2)}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {JSON.stringify(searchParams, null, 2)}
            </CardContent>
        </Card>
        </div>
    )
}