import dashboarddata from "./dashboarddata";

export default function Dashboard(props) {
    const iconUp =  "./assets/icon-up.svg"
    const iconDown = "./assets/icon-down.svg"
    const {arrow, stats, user,social, peopleDescription, peopleNum, lightMode} = props
    const valClass = lightMode == true ? "light card" : "card"

    return (
        <div className={valClass}>
        <div className="cardBox">
            <img src={social} alt="" />
            <p className="userName">{user}</p>
        </div>
            <h2>{peopleNum}</h2>
            <p className="followers">{peopleDescription}</p>
            <p className="presentstat" 
            style={{color: arrow === iconUp ? "hsl(203, 89%, 53%)" : "hsl(356, 69%, 56%)"}}>
            <img src={arrow} alt="" /> {stats}</p>
        </div>
    )
}