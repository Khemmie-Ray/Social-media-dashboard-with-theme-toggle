export default function Overview (props) { 
    const up =  "./assets/icon-up.svg"
    const down = "./assets/icon-down.svg"
    const {arrow, rate, title, social, figure, lightMode} = props
    const valClass = lightMode == true ? "light mini-card" : "mini-card"
  
    return (
        <div className={valClass}>
            <div className="box-one">
                <p className="views">{title}</p>
                <img src={social} alt="" />
            </div>
            <div className="box-one">
                <h4>{figure}</h4>
                <p className="presentstat" 
                style={{color: arrow === up ? "hsl(203, 89%, 53%)" : "hsl(356, 69%, 56%)"}}>
                <img src={arrow} alt="" /> {rate}</p>
            </div>
        </div>
    )
}