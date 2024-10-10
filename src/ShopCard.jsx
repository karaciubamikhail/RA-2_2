export function ShopCard (datas){
    const data = datas.data.data.map((el,id)=>{
        return(
        <div className="card" key={id}>
            {el.name}
            {el.color}
            <img className='card_img' src={el.img}/>
            <div className="prices">
                {el.price}
                <button>Купить</button>
            </div>
        </div>
        )
    })
    return(data)
}