import { buttonType } from "@/types/buttonType";
function Button(props: buttonType) {
  console.log(`props = ${props.title}`);
  
  return (
    <div>
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{props.title}</button>
    </div>
  )
}

export default Button
