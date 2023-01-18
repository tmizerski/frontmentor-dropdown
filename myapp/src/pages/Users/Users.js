import React, {useContext} from "react";
import DataTable from "../../components/DataTable/DataTable";
import EsotiqButton from "../../components/EsotiqButton/EsotiqButton";
import ErrorHandler from "../../components/ErrorHandler/ErrorHandler";
import {ErrorContext} from "../../store/ErrorContext";

import "./Users.css";

const Users = () => {
    const errorContext = useContext(ErrorContext);
    const {error} = errorContext;


    const handleOnClick = () => {
        console.log("tak")
    }

    return (
        <div className={"users-container"}>
            {error &&
                <div className={"error-table"}>
                    <ErrorHandler error={error} />
                </div>
            }
            <div>Breadcrumb</div>
            <DataTable
                title={"Lista użytkowników"}
                subTitle={"Poniższa lista nie zawiera kontrahentów i salonów"}
                search={"firstName"}
                fetchData={{
                    url: "http://localhost:5000/users/get",
                    options: {
                        limit: 25,
                        currentPage: 1
                    }
            }}
                columns={[{
                        label: "Imię",
                        field: "firstName",
                        render: row => row.firstName
                    },
                    {
                        label: "email",
                        field: "email",
                        render: row => row.email
                    },
                    {
                        label: "funkcja",
                        field: "role",
                        render: row => row.role
                    },
                    {
                        label: "akcje",
                        field: "actions",
                        render: row => <div className={"table-button-holder"}>
                            <EsotiqButton label={"edytuj"} color={"white"} click={()=>handleOnClick()} />
                            <EsotiqButton label={"zablokuj"} color={"white"} bgcolor={"block"} click={()=>handleOnClick()} />
                            <EsotiqButton label={"usuń"} color={"white"} bgcolor={"delete"} click={()=>handleOnClick()} />
                        </div>
                            }
                ]}
            />
        </div>
    )
}

export default Users;