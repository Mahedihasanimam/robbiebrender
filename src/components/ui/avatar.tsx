import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const avatarVariants = cva("inline-flex items-center justify-center rounded-full", {
  variants: {
    size: {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {}

function Avatar({ className, size, ...props }: AvatarProps) {
  return <div className={cn(avatarVariants({ size }), className)} {...props} />
}

const avatarImageVariants = cva("aspect-square h-full w-full", {
  variants: {
    variant: {
      rounded: "rounded-full",
      square: "rounded-md",
    },
  },
  defaultVariants: {
    variant: "rounded",
  },
})

export interface AvatarImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof avatarImageVariants> {}

function AvatarImage({ className, variant, alt = "", ...props }: AvatarImageProps) {
  return <img className={cn(avatarImageVariants({ variant }), className)} alt={alt} {...props} />
}

const avatarFallbackVariants = cva("flex h-full w-full items-center justify-center rounded-full bg-muted", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export interface AvatarFallbackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarFallbackVariants> {}

function AvatarFallback({ className, size, ...props }: AvatarFallbackProps) {
  return <div className={cn(avatarFallbackVariants({ size }), className)} {...props} />
}

export { Avatar, AvatarImage, AvatarFallback }

