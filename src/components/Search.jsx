import styles from "../css/Search.module.css";


export function Search({filterData}) {

    
   
   

    



    return <div className={styles.contentSearch}>
        <div className={styles.prueba}>
            <h1 className={styles.titleSearch}>Live User Filter</h1>
            <h3 className={styles.subtitleSearc}>Search by name and/or location</h3>
            <input type="text" placeholder="Search" onChange={(e)=>{filterData(e.target.value)}} className={styles.inputSearch} id="filter" />
        </div>
    </div>


}