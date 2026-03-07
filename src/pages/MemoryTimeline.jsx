import { motion } from "framer-motion"
import PageTransition from "../components/PageTransition"
import { useState, useEffect } from "react"
import GiftBox from "../components/GiftBox"

function MemoryTimeline(){

const [showGift,setShowGift] = useState(false)

useEffect(()=>{

const handleScroll = () =>{

const bottom =
window.innerHeight + window.scrollY >=
document.body.offsetHeight - 50

if(bottom){
setShowGift(true)
}

}

window.addEventListener("scroll",handleScroll)

return ()=> window.removeEventListener("scroll",handleScroll)

},[])

const memories = [
{
year:"2024",
title:"Lần đầu gặp em",
text:"Hôm đó anh vẫn nhớ rất rõ. Khi còn đang làm vệ binh đứng trước cổng, anh thấy em đi tới. Không hiểu sao lúc đó anh lại lấy hết can đảm chặn em lại nói chuyện vài câu. Chỉ là một khoảnh khắc rất bình thường thôi, nhưng với anh thì lại đặc biệt đến lạ. Từ ánh mắt, nụ cười cho tới cách em nói chuyện, tất cả đều làm anh nhớ mãi. Có lẽ ngay từ lúc đó, anh đã biết rằng cuộc gặp gỡ này không hề bình thường chút nào. Và anh cũng không ngờ rằng từ lần gặp nhỏ bé trước cổng hôm ấy, sau này lại có thêm rất nhiều câu chuyện và kỷ niệm của hai đứa mình.",
video:"/memories/111.mp4"
},
{
year:"2024",
title:"Lần đầu đi chơi",
text:"Buổi đi chơi hôm đó anh vẫn nhớ rất rõ. Hai đứa mình cùng nhau đi xem phim, rồi sau đó ghé quán cà phê ngồi nói chuyện đủ thứ trên đời. Không khí lúc đó rất vui và thoải mái, kiểu như hai đứa quen nhau lâu rồi chứ không phải chỉ mới bắt đầu. Mình còn chụp hình, quay video các kiểu để lưu lại kỷ niệm. Đặc biệt là lúc em quay cái video hot trend nụ cười của Kim Seon Ho, nhìn vừa dễ thương vừa buồn cười làm anh cười suốt cả buổi. Những khoảnh khắc nhỏ nhỏ như vậy thôi nhưng lại khiến ngày hôm đó trở nên cực kỳ đáng nhớ. Đối với anh, đó không chỉ là một buổi đi chơi bình thường mà là một trong những kỷ niệm đầu tiên rất vui của hai đứa mình.",
video:"/memories/11.mp4"
},
{
year:"2025",
title:"Ôi trời ơi my destiny",
text:"Từ lúc đó mọi thứ bắt đầu trở nên khác. Những cuộc nói chuyện, những lần gặp nhau, rồi dần dần mọi khoảnh khắc đều trở nên đặc biệt hơn trước. Hai đứa mình bắt đầu có nhiều kỷ niệm cùng nhau hơn, từ những buổi đi chơi, những lần chụp hình cho tới những lúc chỉ ngồi cạnh nhau nói chuyện linh tinh. Nhìn lại mới thấy mọi thứ giống như một sự sắp đặt rất tình cờ của số phận. Có lẽ đúng như câu “my destiny”, vì nếu hôm đó không gặp em, không nói chuyện với em, thì chắc cũng sẽ không có tất cả những kỷ niệm đẹp sau này. Và từ lúc đó, cuộc sống của anh cũng bắt đầu có thêm một người đặc biệt ở bên cạnh. ❤️",
video:"/memories/v3.mp4"
},
{
year:"2026",
title:"Happy 8/3 ❤️",
text:"Anh chỉ mong rằng sau này khi nhìn lại, em sẽ nhớ rằng đã từng có một người rất trân trọng em, luôn muốn làm những điều nhỏ nhỏ để em vui, dù chỉ là một website đơn giản như thế này. Hy vọng rằng em sẽ luôn vui vẻ, luôn xinh đẹp, và đôi khi nhớ tới anh một chút cũng được. Và quan trọng nhất là… nhớ phải yêu thương và trân trọng anh nhiều hơn một chút nữa đó nha. Anh yêu em nhiều lắm, Tiên ơi. ❤️",
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

<p className="text-gray-400 text-sm md:text-base mt-2">
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
Em tìm thấy một hộp quà bí mật rồi 💝 ❤️
</p>

</motion.div>

{/* GIFT BOX */}

{showGift && <GiftBox/>}

</div>

</PageTransition>

)

}

export default MemoryTimeline