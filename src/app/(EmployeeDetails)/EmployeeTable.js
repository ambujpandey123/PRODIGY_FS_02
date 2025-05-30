import Link from "next/link"
import "../style.css" 
import DeleteEmployee from "./deletemployee/page"
import { apiUrl } from "../lib/connection"
export default async function EmployeeTable() {
    let data = []
     try {
      const response = await fetch(`${apiUrl}employee`,{cache:"no-cache"})
      data = await response.json()
      // console.log("data",data);
     } catch (error) {
      console.error("Error fetching employee data:", error);
      alert("Failed to fetch employee data. Please try again later.");
     }
     
     data = Array.isArray(data.result) ? data.result : []

    
    return (
        <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-800 text-white">
          <th className="py-3 px-4">Name</th>
          <th className="py-3 px-4">Destination</th>
          <th className="py-3 px-4">Salary</th>
          <th className="py-3 px-4">Department</th>
          <th className="py-3 px-8">Update</th>
          <th className="py-3 px-8">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
          <tr>
            <td
            colSpan={6}
            className="text-center py-8 text-gray-400"
            >
            No employee data found.
            </td>
          </tr>
          ) : (
          data.map((item, idx) => (
            <tr
            key={item.id}
            className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
            <td className="py-3 px-4 text-center">{item.name}</td>
            <td className="py-3 px-4 text-center">{item.destination}</td>
            <td className="py-3 px-4 text-center">{item.salary}</td>
            <td className="py-3 px-4 text-center">{item.department}</td>
            <td className="py-3 px-8 text-center hover:bg-blue-100">
              <Link
              href={"employee/" + item.id}
              className="text-blue-600 hover:underline  font-medium"
              >
              Edit
              </Link>
            </td>
            <td className="py-3 px-8 text-center hover:bg-red-100">  
              <DeleteEmployee id={item.id} />
            </td>
            </tr>
          ))
          )}
        </tbody>
        </table>
    )
}