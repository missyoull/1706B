export interface RouterItemType{
    path: string,
    component: Function,
    redirect?: string,
    children?: RouterItemType[]
}

export interface PropType{
    routes: RouterItemType []
}

export interface ActionType{
    type: string,
    payload: any
} 

export interface CategoryItem{
    id: string,
    name: string,
    wap_banner_url: string,
    [key: string]: any
}

export interface SubCategoryItem{
    id: string,
    name: string,
    wap_banner_url: string,
    [key: string]: any
}