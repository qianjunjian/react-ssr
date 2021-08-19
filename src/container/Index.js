import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { getIndexList } from "../store/index";
import withStyle from "../withStyle";
import styles from "./index.module.css";

function Index(props) {
    const [count, setCount] = useState(1);
    useEffect(() => {
        if (!props.list.length) {
            props.getIndexList();
        }
    }, [])
  
    return <div>
        <h2>hello {props.title},  {count} </h2>
        <button className={styles.title} onClick={() => setCount(count + 1)}>累加</button>
        <button onClick={() => props.history.push("/about")}>跳转</button>
        {
            props.list.length && props.list.map(v => {
                return <span key={v.name}>{v.name}</span>
            })
        }
    </div>
}

Index.loadData = (store) => {
    return store.dispatch(getIndexList());
}

export default connect(state => 
    ({list: state.index.list}),
    {getIndexList}
)(withStyle(Index, styles))