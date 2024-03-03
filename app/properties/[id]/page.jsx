'use client'
import { useRouter } from "next/navigation";

const PropertyPage = () => {
    const route = useRouter();
  return (
    <div>PropertyPage
        <button onClick={()=> route.push('/')} className="bg-blue-500">Home</button>
    </div> 
  )
}

export default PropertyPage