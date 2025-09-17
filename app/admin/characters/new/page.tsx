import Form from "next/form";
import {Input} from "@/src/components/ui/input";
import {Label} from "@/src/components/ui/label";
import {Button} from "@/src/components/ui/button";
import {Card,CardHeader,CardTitle,CardContent} from "@/src/components/ui/card";

export default function Page(){
    return(
        <Card>
            <CardHeader>
                <CardTitle>Add a character</CardTitle>
            </CardHeader>
            <CardContent>
                 <Form className="flex flex-col gap-2" action="/api/characters" formMethod="Post">
                    <Label>
                        Character : 
                        <Input/>
                    </Label>
                    <Label>
                        Title : 
                        <Input/>
                    </Label>
                    <Button type="submit">Submit</Button>
                </Form>
            </CardContent>
        </Card>
    )
}