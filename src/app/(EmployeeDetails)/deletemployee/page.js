"use client"
import { apiUrl } from "@/app/lib/connection";
import { useRouter } from "next/navigation";

export default function DeleteEmployee(props) {
    const id = props.id;
    const router = useRouter();

    const deleteRecord = async () => {
        let result = await fetch(`${apiUrl}employee/${id}`, {
            method: "DELETE",
        });
        result = await result.json();
        // console.log(result);

        if (result.success) {
            alert("Employee Deleted");
            router.push("/");
        } else {
            alert("Not deleted");
        }
    };

    return (
        <button  onClick={deleteRecord}>Delete</button>
    );
}