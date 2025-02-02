"use client"

import { Button } from "~/components/ui/button"
import { ScrollArea } from "~/components/ui/scroll-area"

const Page = () => {
  return (
    <ScrollArea className="h-full">
    <div className="container flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Hi, Welcome back 👋
        </h2>
        <div className="hidden items-center space-x-2 md:flex">
            
          <Button>Add Project</Button>
        </div>
      </div>
      
    </div>
  </ScrollArea>
  )
}

export default Page