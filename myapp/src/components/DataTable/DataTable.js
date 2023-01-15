import React, {useEffect, useState} from "react";

const DataTable = (props) => {
    const [data, setData] = useState(null);
    const [columns, setColumns] = useState(null);

    const {fetchData} = props;

    const loadData = (fetchData) => {
        setData(props.data)
    }

    useEffect(()=>{
        loadData();
    },[])

    return(
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;