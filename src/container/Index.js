import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import { getIndexList } from "../store/index";

function Index(props) {
    const [count, setCount] = useState(1);

    useEffect(() => {
        props.getIndexList();
    }, [])

    return <div>
        <h2>hello {props.title},  {count} </h2>
        <button onClick={() => setCount(count + 1)}>累加</button>
        <button onClick={() => props.history.push("/about")}>跳转</button>
        {
            props.list && props.list.map(v => <div key={v}>{v.name}</div>)
        }
    </div>
}

export default connect(state => 
    ({list: state.index.list}),
    {getIndexList}
)(Index)