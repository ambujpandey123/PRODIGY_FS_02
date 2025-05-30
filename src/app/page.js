import Link from "next/link"
import EmployeeTable from "./(EmployeeDetails)/EmployeeTable"
 
export default async function allProduct() {
    
    return (
      <>
        <nav className="w-full bg-blue-600 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">Employee Management</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="#about" className=" hover:underline"> <p className="text-white ">About</p> </Link>
            <Link href="#contact" className="text-white hover:underline"><p className="text-white ">Contact Us</p> </Link>
          </div>
          {/* Hamburger icon is shown on mobile, but no JS interaction */}
          <div className="md:hidden">
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </nav>
        {/* Always show mobile menu on small screens, hidden on md+ */}
        <div className="md:hidden bg-blue-600 px-4 py-2 flex flex-col space-y-1">
          <Link href="/about" className="block text-white py-1 hover:underline"><p className="text-white ">About</p></Link>
          <Link href="/contact" className="block text-white py-1 hover:underline"><p className="text-white ">Contact us</p></Link>
        </div>
        <div className="flex flex-col items-center pt-20 w-full ">
          <div id="EmployeeDetails" className="p-8 bg-white w-full max-w-4xl flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Employee Details
            </h2>
            <EmployeeTable />
          </div>
          <Link href={"/addemployee"} className="mt-4 px-4 py-2 border border-blue-300 text-white rounded hover:bg-blue-300 transition">
            Add New Employee
          </Link>
        </div>
      </>
    )
}