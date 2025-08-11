import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import { Link } from 'react-router-dom'
import {
    Card,
    // CardAction,
    CardContent,
    // CardDescription,
    // CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { aiModels } from "@/data/ai-models"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function SideBySideChatTestingPage(){
    return(
        <>
            <NavigationMenu viewport={false} className="justify-start items-start mx-3 my-3">
                <NavigationMenuList className="flex-col items-start gap-2">
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} w-full justify-start bg-red-200`}>
                            <Link to="/">Back to Home</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div>
                <div className="flex justify-center">
                    <h1 className="font-bold underline">Side By Side Chat Testing</h1>
                </div>
                <div className="flex justify-center">
                    <Card className="w-2xl mx-5 my-10">
                        <CardHeader>
                            <CardTitle>Chatbot</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="chat border-solid border-2 rounded-md border-slate-700">
                                <div className="mx-5 my-5">
                                    <p className="text-gray-400">Chatbot chat history</p>
                                </div>
                            </div>
                            <div className="flex mt-2 gap-2">
                                <Input placeholder="Type question ..."/>
                            <Button className="">Send</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <h2 className="text-center mb-4 font-bold underline text-2xl">Results</h2>
                <div className="grid grid-cols-3 gap-2">
                    {aiModels.map((model) => {
                        return(
                            <Card className="w-md mx-5 my-2">
                                <CardHeader>
                                    <CardTitle>
                                        <Badge variant="secondary">
                                            {model.name} Chatbot
                                        </Badge>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </>
    )
}