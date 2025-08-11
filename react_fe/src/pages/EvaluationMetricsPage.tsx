import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import { Link } from 'react-router-dom'

export default function EvaluationMetricsPage(){
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
            <h1>EvaluationMetricsPage</h1>
        </>
    )
}