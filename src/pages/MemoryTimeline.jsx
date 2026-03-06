import { motion } from "framer-motion"
import PageTransition from "../components/PageTransition"

function MemoryTimeline(){

const memories = [
{
year:"2024",
title:"Lần đầu gặp em",
text:"Hôm đó anh vẫn nhớ rất rõ anh đã chặn e trước cổng khi còn là vệ binh",
video:"/memories/111.mp4"
},
{
year:"2024",
title:"Lần đầu đi chơi",
text:"Buổi đi chơi hôm đó vui cực",
video:"/memories/11.mp4"
},
{
year:"2025",
title:"Ôi trời ơi my destiny",
text:"Từ đó mọi thứ trở nên khác",
video:"/memories/v3.mp4"
},
{
year:"2026",
title:"Happy 8/3 ❤️",
text:"Anh làm website này cho em phải biết trân trọng yêu thương anh nha",
video:"/memories/v1.mp4"
}
]

return(

<PageTransition>

<div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white py-20 px-6 flex flex-col items-center overflow-hidden">

{/* TITLE */}

<motion.h1
initial={{opacity:0,y:-40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="text-4xl md:text-6xl font-bold text-pink-400 mb-20 drop-shadow-[0_0_20px_pink] text-center"
>

Our Memories ❤️

</motion.h1>

<div className="relative w-full max-w-5xl">

{/* TIMELINE LINE */}

<motion.div
initial={{height:0}}
whileInView={{height:"100%"}}
transition={{duration:1}}
className="absolute left-4 md:left-1/2 top-0 w-[3px] bg-pink-500 shadow-[0_0_20px_#ff4d6d] md:-translate-x-1/2"
/>

{memories.map((m,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:100}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.7}}
viewport={{once:true}}
className={`
mb-20 flex
${i%2===0 ? "md:justify-start" : "md:justify-end"}
`}
>

{/* HEART DOT */}

<div className="absolute left-[6px] md:left-1/2 w-4 h-4 bg-pink-500 rounded-full shadow-[0_0_15px_pink] md:-translate-x-1/2"/>

<motion.div
whileHover={{scale:1.05}}
className="
ml-10 md:ml-0
bg-[#1f1f1f]/80 backdrop-blur-xl
p-5 md:p-6
rounded-2xl
shadow-xl
w-full md:w-[420px]
border border-pink-500/30
hover:shadow-[0_0_40px_#ff4d6d]
transition
"
>

<h3 className="text-pink-400 text-lg md:text-xl font-bold">
{m.year}
</h3>

<h4 className="font-semibold mt-1 text-base md:text-lg">
{m.title}
</h4>

<p className="text-gray-400 text-sm mt-2">
{m.text}
</p>

{/* VIDEO */}

<motion.video
whileHover={{scale:1.05}}
src={m.video}
className="mt-4 rounded-lg w-full object-cover shadow-lg"
autoPlay
loop
muted
playsInline
preload="metadata"
/>

</motion.div>

</motion.div>

))}

</div>

{/* FINAL MESSAGE */}

<motion.div
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{delay:0.3}}
className="text-center mt-10 px-4"
>

<p className="text-xl md:text-2xl text-pink-400 drop-shadow-[0_0_10px_pink]">
Và anh muốn viết tiếp timeline này cùng em ❤️
</p>

</motion.div>

</div>

</PageTransition>

)

}

export default MemoryTimeline