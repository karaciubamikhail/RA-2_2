export function CardsView (datas){
    const data = datas.data.map((el)=>{
        return(
        <div className="card">
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