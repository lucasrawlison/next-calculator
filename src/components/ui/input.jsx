import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({value, className, type, ...props}, ref) => {
  return (
    (<input 
      readOnly
      type={type}
      className={cn(
        "text-3xl text-right flex h-1/6 w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props} value={props.currentvalue} />)
  );
})
Input.displayName = "Input"

export { Input }
