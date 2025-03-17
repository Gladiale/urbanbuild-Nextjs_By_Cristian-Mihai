import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-border placeholder:text-secondary aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full border bg-white px-6 py-4 text-base text-primary transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus:border-accent",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
