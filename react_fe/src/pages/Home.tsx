
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from 'react-router-dom'
import { aiModels } from '@/data/ai-models'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Home(){
  interface NavMenu {
    linkName :string;
    link :string;
  }

  const navmenus :NavMenu[] = [
    {
      linkName: 'Home',
      link: '/'
    },
    {
      linkName: 'Side By Side Chat Testing',
      link: '/sidebyside-chat-testing'
    },
    {
      linkName: 'Evaluation Metrics',
      link: '/evaluation-metrics'
    },
    {
      linkName: 'Performance Analytics',
      link: '/performance-analytics'
    },
    {
      linkName: 'Prompt Library',
      link: '/prompt-library'
    },
    {
      linkName: 'Export And Share',
      link: '/export-and-share'
    },
    {
      linkName: 'Api And Model Switching',
      link: '/api-and-model-switching'
    },
    {
      linkName: 'Extra Features For Power Users',
      link: '/extra-features-for-power-users'
    },
    {
      linkName: 'Vector DB',
      link: '/vector-db'
    },
  ]

  return(
    <>
      <div className="text-center mb-6 mt-5">
        <h1 className="text-2xl font-semibold">PPJ Ai Models Comparison</h1>
        <p className="text-sm text-gray-400 mt-1">Comparison , benchmark for every ai models</p>
      </div>

      <div className="bg-slate-400 my-10 py-5 w-full max-w-sm mx-auto rounded-md">
        <div className="flex justify-center">
          <NavigationMenu viewport={false} className="justify-start items-start">
            <NavigationMenuList className="flex-col items-start gap-2">
              {navmenus.map((nav) => {
                return(
                  <NavigationMenuItem key={nav.link} className="w-full">
                    <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} w-full justify-start`}>
                      <Link to={nav.link}>{nav.linkName}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      <div className="card flex justify-center gap-2 w-full">
        <div className="w-max-full w-full mx-10">
          <Card>
            <CardHeader>
              <CardTitle>Ai Models List</CardTitle>
              <CardDescription>List of Top AI Models - 2025</CardDescription>
            </CardHeader>
            <CardContent>
              {aiModels.map((model) => {
                return(
                  <Tooltip key={model.name}>
                    <TooltipTrigger>
                      <Badge className="mx-1">{model.name}</Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Developer : {model.developer}</p>
                      <p>Notes : {model.notes}</p>
                      <p>Release Date : {model.releaseDate}</p>
                      <p>Type : {model.type}</p>
                    </TooltipContent>
                  </Tooltip>
                )
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}