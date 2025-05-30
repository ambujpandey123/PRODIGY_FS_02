"use client"
import { useState } from "react"
import "../../style.css"
import { useRouter } from "next/navigation"
import { apiUrl } from "@/app/lib/connection"
export default function Neww() {
    const [name, setName] = useState("")
    const [destination, setDestination] = useState("")
    const [salary, setSalary] = useState("")
    const [department, setDepartment] = useState("")
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function submitdata(e) {
        e.preventDefault(); 
        
        if (!name || !destination || !salary || !department) {
            alert("Please fill all fields.");
            return;
        }
        
        console.log("Submitting data:", { name, destination, salary, department });
        setLoading(true);
        try {
            let response = await fetch(`${apiUrl}employee`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    salary: Number(salary),
                    department,
                    destination
                })
            });
            response = await response.json();
            if (response.success) {
                alert("New employee added");
                setName("");
                setDestination("");
                setSalary("");
                setDepartment("");
                router.push("/");
            } else {
                alert(response.message || "Some error occurred");
            }
        } catch (err) {
            alert("Network error");
        }
        setLoading(false);
    }
    return (
        <div className={"parent"}>
            <form className={"form"} onSubmit={submitdata}>
                <h1>Add Employee</h1>
                <span>
                    <input
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                        <input
                            type="number"
                            placeholder="Enter salary"
                            value={salary}
                            onChange={e => setSalary(e.target.value)}
                            min="1"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Enter department"
                            value={department}
                            onChange={e => setDepartment(e.target.value)}
                            required
                        />
                    <input
                        type="text"
                        placeholder="Enter destination"
                        value={destination}
                        onChange={e => setDestination(e.target.value)}
                        required
                    />
                </span>
                <button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    )
}