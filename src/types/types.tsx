export interface ITodos {
    id: number
    text: string
    status?: boolean
}

export interface IAdress {
    street: string
    city: string
    zipcode: string
}

export interface IUser {
    id: number
    name: string
    email: string
    address: IAdress
}

export interface IYesNo {
    answer: string
    forced: boolean
    image: string
}

export interface IOwner {
    id: number
    avatar_url: string
    html_url: string
    login: string
}

export interface IGithubRep {
    id: number
    html_url: string
    name: string
    owner: IOwner
    stargazers_count: number
    description: string
    language: string
}