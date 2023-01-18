import React, {useContext, useEffect, useState} from "react";
import TableHead from "./TableHead";
import axios from "axios";
import "./DataTable.css";
import {ErrorContext} from "../../store/ErrorContext";
// import {Dropdown, Pagination} from "semantic-ui-react";

const DataTable = (props) => {
    const [data, setData] = useState(null);
    const [columns, setColumns] = useState(null);
    const [totalCount, setTotalCount] = useState(null);
    const [inputValue, setInputValue] = useState(null);
    // const [pagination, setPagination] = useState(null);
    // const [limit, setLimit] = useState(25);
    // const [page, setPage] = useState(1);

    const {dispatch} = useContext(ErrorContext);

    const {fetchData} = props;

    const init = () => {
        axios.get(fetchData.url, {
            params: {
                limit: fetchData.options.limit || 1,
                currentPage: fetchData.options.currentPage || 25
            }
        }).then( r => {
            setData(r.data.data)
            setTotalCount(r.data.totalCount);
            setColumns(props.columns)
        }).catch(err => {
            dispatch({type: "setError", payload: err.data.message})
        })
    }

    function filterSearch(value) {
        setInputValue(value)
    }

    useEffect(() => {
        init();
        return ()=>{
            return
        }
    }, [])

    return(
        <div className={"table-container"}>
            <table className="table">
                <thead>
                    <TableHead
                        columns={props.columns}
                        title={props.title}
                        subTitle={props.subTitle}
                        filterSearch={filterSearch}
                    />
                </thead>
                <tbody>
                {data && Array.isArray(data) &&
                    data.filter((element, index) => {
                        if(!inputValue) {
                            return element
                        }
                        if(element[props.search].includes(inputValue)) {
                            return element
                        }}).map((row, k) => {
                        return <tr key={k} className={"table-row"}>
                            {columns.map((col, index)=> {
                                return <td key={index}>{col.render(row)}</td>
                            })}
                        </tr>
                    })
                }
                </tbody>
                {/*<tfoot>*/}
                {/*<Dropdown*/}
                {/*    upward*/}
                {/*    selection*/}
                {/*    compact*/}
                {/*    defaultValue={page || 25}*/}
                {/*    options={[*/}
                {/*        { key: 25, text: '25', value: 25 },*/}
                {/*        { key: 50, text: '50', value: 50 },*/}
                {/*        { key: 100, text: '100', value: 100 },*/}
                {/*        { key: 200, text: '200', value: 200 },*/}
                {/*        { key: 300, text: '300', value: 300 },*/}
                {/*        { key: 350, text: '350', value: 350 },*/}
                {/*    ]}*/}
                {/*    placeholder={"Na stronie:"}*/}
                {/*    onChange={(e, v) => {*/}
                {/*        setLimit(v.value);*/}
                {/*    }}*/}
                {/*/>*/}
                {/*<Pagination*/}
                {/*    onPageChange={(e, page) => pageChange(e)}*/}
                {/*    defaultActivePage={1}*/}
                {/*    totalPages={totalCount/limit}/>*/}
                {/*</tfoot>*/}
            </table>
        </div>
    )
}

export default DataTable;