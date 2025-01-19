import { SyntheticEvent } from "react"

export interface IHomeProps {}

export interface HandleSubmitProps {
    e: SyntheticEvent,
    username: string,
    password: string
}
