import { Card } from "./Card";
import styles from "../css/List.module.css"


export function List({filteredData}) {

    


    return <ul className={styles.contentList}>

        {
            filteredData.map((e, i) => {
                return <Card key={i} e={e} />

            })
        }

    </ul>



}