
const Greeting = () => {
    return(
        <>  
        <section className={`min-w-full w-full justify-between items-center navbar bg-white`}>
            <div className={`size-120`}>
                <span className={`text-[24px] font-raleway font-semibold text-black`}>ООО РЫБОВЗАВОД — ВАШЕ СЧАСТЬЕ ЧТО ЭТО ДЕЛАЕМ МЫ</span>
                <svg className="size-120 flex-no-shrink" viewBox="0 0 1440 690" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1440" height="690" fill="#8E61F1"/>
                    <rect x="200" y="184" width="256" height="256" rx="128" fill="#D3C1FA"/>
                    <rect x="1290" y="328" width="86" height="86" rx="43" fill="#B9E5FF"/>
                    <rect x="64" y="128" width="85" height="85" rx="42.5" fill="#FDCFC4"/>
                    <g filter="url(#filter0_dd_501_679)">
                        <rect x="64" y="397" width="120" height="120" rx="60" fill="#B9E5FF"/>
                    </g>
                    <g filter="url(#filter1_dd_501_679)">
                        <rect x="488" y="434" width="160" height="160" rx="80" fill="#FFC9E2"/>
                    </g>
                    <rect x="1084" y="128" width="160" height="160" rx="80" fill="#D3C1FA"/>
                    <rect x="804" y="402" width="120" height="120" rx="60" fill="#FDCFC4"/>
                    <rect x="952" y="328" width="267" height="267" rx="133.5" fill="#FFC9E2"/>

                    {/* Добавляем текст по центру */}
                    <text className='font-raleway font-semibold text-[2rem]'x="720" y="305" textAnchor="middle" dominantBaseline="middle" fill="white">
                        ООО РЫБОВЗАВОД —
                    </text>
                    <text className='font-raleway font-semibold text-[2rem]'x="720" y="345" textAnchor="middle" dominantBaseline="middle" fill="white">
                        ВАШЕ СЧАСТЬЕ ЧТО ЭТО ДЕЛАЕМ МЫ
                    </text>

                    <foreignObject x="620" y="400" width="200" height="70">
                        <button className="font-raleway font-medium text-[1rem] px-12 rounded-2xl bg-white text-[#6D31ED] border-[#6D31ED] focus:border-[2px] focus:border-[#6D31ED] transition-all" x="720" y="345" textAnchor="middle" dominantBaseline="middle" fill="white">
                            подписаца
                        </button>
                    </foreignObject>

                    <defs> 
                        <filter id="filter0_dd_501_679" x="62" y="395" width="124" height="124" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> 
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/> 
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> 
                            <feOffset/> 
                            <feGaussianBlur stdDeviation="0.5"/> 
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0901961 0 0 0 0 0.101961 0 0 0 0 0.121569 0 0 0 0.07 0"/> 
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_501_679"/> 
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> 
                            <feOffset/> 
                            <feGaussianBlur stdDeviation="1"/> 
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0901961 0 0 0 0 0.101961 0 0 0 0 0.121569 0 0 0 0.12 0"/> 
                            <feBlend mode="normal" in2="effect1_dropShadow_501_679" result="effect2_dropShadow_501_679"/> 
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_501_679" result="shape"/> 
                        </filter> 
                        <filter id="filter1_dd_501_679" x="486" y="432" width="164" height="164" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> 
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/> 
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> 
                            <feOffset/> 
                            <feGaussianBlur stdDeviation="0.5"/> 
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0901961 0 0 0 0 0.101961 0 0 0 0 0.121569 0 0 0 0.07 0"/> 
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_501_679"/> 
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> 
                            <feOffset/> 
                            <feGaussianBlur stdDeviation="1"/> 
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0901961 0 0 0 0 0.101961 0 0 0 0 0.121569 0 0 0 0.12 0"/> 
                            <feBlend mode="normal" in2="effect1_dropShadow_501_679" result="effect2_dropShadow_501_679"/> 
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_501_679" result="shape"/> 
                        </filter> 
                    </defs>
                </svg>
            </div>
        </section>
        </>
    )
}

export default Greeting