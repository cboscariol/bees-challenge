import { Children } from "react"

export type UserContextProps = {
  children: Children
}

export type UserContextValue = {
  user?: {
    fullName?: string
  },
  setUser?: Dispatch<SetStateAction<{}>>
}
