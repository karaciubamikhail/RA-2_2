import { ShopCard } from "./ShopCard"
export function ListView (datas){
    return(
        <div className="cards">
            <ShopCard data = {datas}/>
        </div>
    )
}