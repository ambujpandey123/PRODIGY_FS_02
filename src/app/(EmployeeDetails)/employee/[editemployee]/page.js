"use client"
import { use, useEffect, useState } from "react"
import "../../../style.css"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { apiUrl } from "@/app/lib/connection";
export default function EditEmployee({ params }) {
    const router = useRouter();
    const [name, setName] = useState("")
    const [salary, setSalary] = useState("")
    const [department, setDepartment] = useState("")
    const [destination, setDestination] = useState("")
    const unwrappedParams = use(params);
    const id = unwrappedParams.editemployee;
    // console.log(id);

    const updateEmployeeDetails = async () => {
        let result = await fetch(`${apiUrl}employee/`+id,{
            method:"PUT",
            body:JSON.stringify({name, salary, department, destination})
        });
        result = await result.json();
      
        if(result.success){
            alert("Employee has been updated")
            router.push("/");
        }
        else {
            alert("Some error occurred")
        }
    }
    useEffect(() => {

        const getEmployeeDetails = async () => {
            let response = await fetch("http://localhost:3000/api/employee/"+id);
            response = await response.json();
            if (response.success) {
                let data = response.data;
                setName(data.name ?? "")
                setSalary(data.salary ?? "")
                setDepartment(data.department ?? "")
                setDestination(data.destination ?? "")
            }
            else {
                alert("Internal server error")
            }
        }
        getEmployeeDetails()
    },[])
    return (
        <div className={"parent"}>
            <div className={"form"}>
                <h1>Update Employee</h1>
                <span>
                    <input type="text" placeholder="Enter name" value={name} onChange={(e) => { setName(e.target.value) }} />
                    <input type="text" placeholder="Enter salary" value={salary} onChange={(e) => { setSalary(e.target.value) }} />
                    <input type="text" placeholder="Enter department" value={department} onChange={(e) => { setDepartment(e.target.value) }} />
                    <input type="text" placeholder="Enter destination" value={destination} onChange={(e) => { setDestination(e.target.value) }} />
                </span>
                <button onClick={updateEmployeeDetails} >Update</button>
                <Link href={"/"}>Go to employee list</Link>
            </div>
        </div>
    )
}