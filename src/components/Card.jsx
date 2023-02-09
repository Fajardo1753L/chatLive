import styles from "../css/Card.module.css"

export function Card({e}) {

   

  





    return <li className={styles.lista}>
            <img src={e.picture.large} alt="err" />
            <div className={styles.contentText}>
                <h4>{e.name.first + ", " + e.name.last}</h4>
                <p>{e.location.city + ", " + e.location.country}</p>
            </div>
        </li>
        
    

}