import { cn } from "../../lib/utility"
const Button = ({ children, className }) => {
  return (
   
    
    <button className={cn(" gap-1.5 rounded-[6px] sm:py-3 py-2 sm:px-[25px] px3.5 bg-[#F26922] w-[108px] h-[42px] font-bold md:text-base text-xs  text-white opacity-90 hover:opacity-100 transition-all delay-150",
    className)}>
 {children}
    </button>
  
  )
}

export default Button