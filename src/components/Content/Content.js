import {FaUser} from 'react-icons/fa'
import { useSpring, animated } from 'react-spring'
import {BsFillCreditCardFill} from 'react-icons/bs'

import checkIconMobile from '../../asserts/mobile/checkpoint.svg'


function Content() {
    const customer = useSpring({ customers: 10245, from: { customers: 0 } });
    const card = useSpring({ cards: 12245, from: { cards: 0 } });
    return ( 
        <section className="md:flex md:flex-row">
            <div className="ml-[70px] mr-[54px] text-bold flex flex-col items-center rounded-[24px] shadow-md bg-gradient-to-b from-white/40 to-transparent md:w-[20%]">
                <div className="mt-16 gap-8 flex items-start ">
                    <FaUser size={"22px"} className="mt-[12px]"/>
                    <div className="text-[26px]">
                        <animated.div>
                             {customer.customers.to((val) => Math.floor(val))}
                        </animated.div>
                        <p className="text-[13px] font-semibold mb-[36px] md:text-[16px] ">Customer</p>
                    </div>
                </div>
                <div className="gap-8 flex items-start mb-16">
                    <BsFillCreditCardFill size="22px" className="mt-[12px]"/>
                    <div className="text-[26px]">
                        <animated.div>
                             {card.cards.to((val) => Math.floor(val))}
                        </animated.div>
                        <p className="text-[13px] font-semibold md:text-[16px]">Cards Issued</p>
                    </div>
                </div>
            </div>

            <div className="text-[13px] flex flex-col w-[100%] mt-[90px] font-semibold md:mt-0 md:w-[30%] md:text-[16px] md:ml-[20%]">
                <div className="flex gap-8 mb-[51px] ml-[70px] mr-[28px] items-center md:x-0">
                    <img src={checkIconMobile} alt="checkIcon" ></img>
                    <p>Card reports sent to your phone every weeks </p>
                </div> 
                <div className="flex gap-8 mb-[51px] ml-[70px] mr-[28px] items-center md:x-0">
                    <img src={checkIconMobile} alt="checkIcon"></img>
                    <p>No external fees </p>
                </div>
                <div className="flex gap-8 mb-[51px] ml-[70px] mr-[28px] items-center md:x-0">
                    <img src={checkIconMobile} alt="checkIcon"></img>
                    <p>Set spending limits and restrictions </p>
                </div>
            </div>
            
        </section>
     );
}

export default Content;