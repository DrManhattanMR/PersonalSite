import React from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

type Props = {};
const sendEmail = (event:any) => {
    event.preventDefault();

    emailjs.sendForm('service_vrwf98v','template_j7kla0h',event.target,'4B2_gweaGDinnzFy2')
        .then((result) => {
            console.log(result.text);
            if (result.text=='OK'){
                toast('Mensaje enviado')
            }
        }, (error) => {
            console.log(error.text);
        });
}

export default function Contact({}: Props) {
    return <div>
        <section className="bg-blue-50 lg:rounded-2xl dark:bg-[#111111]">
            <ToastContainer theme={"colored"} position={"top-right"} />
            <div data-aos="fade" className="aos-init aos-animate">
                <div className="container px-4 sm:px-5 md:px-10 lg:px-20">
                    <div className="py-12 px-4"><h2
                        className="after-effect after:left-44 text-2xl sm:text-3xl font-extrabold text-slate-900 mb-[40px] mt-1 dark:text-slate-200 lg:mt-0 text-[#001c64]">Contact</h2>
                        <div className="lg:flex gap-x-20">
                            <div className="w-full lg:w-[40%] xl:w-[30%] space-y-6">
                                <div
                                    className="flex flex-wrap dark:bg-transparent p-[30px]  border-[#A6A6A6] gap-2 rounded-xl "
                                    style={{background: 'rgb(252, 244, 255)'}}><span className="w-8 mt-2">
                                    <img
                                        src="data:image/png;base64,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"
                                        alt="icon" className="text-4xl dark:text-white"/>
                                    </span>
                                    <div className="space-y-2">
                                        <p className="text-xl font-semibold dark:text-white">Phone:</p>
                                        <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">+1 848 224 0128</p>
                                        <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">+52 667 584 2592</p>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-wrap dark:bg-transparent p-[30px]  border-[#A6A6A6] gap-2 rounded-xl "
                                    style={{background: 'rgb(238, 251, 255)'}}>
                                    <span className="w-8 mt-2">
                                    <img
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABgFBMVEUAAAD/1k//rwP/oABFWmNGWGRCVWL/rAP/rwNFWmREWWREWmT/wAdFWmREWmNEWmRFWWRFWGRFWmNEWWT/nwD/ww9FWmNFWWREWWRFWmRFWmNEVmT/00r/xRT/wQb/yyr/oABFWmRFWWNFWmRFWmREW2ZEWWT/vQj/nQD/00f/zkH/wgtFWmT/uib/yB9FWmRFWmREWmT/oABEWmREWmNEWWRFWWREWGRDWWFEV2b/oQBDWGP/jwA8PFv/zCz/yST/pwr/zDH/0kL/shv/oQD/oAD/wAb/nwBFWmT/wQb/oABFWmRFWWP/oAD/wAf/oAD/oABFWWNFW2P/0VNBWWVBWV3/oQD/0Dz/zzv/1Uz/yDX/xDL/rgP/xBL/1E//wQb/nwD/oAD/1U//zTL/wQf/zTL/1k//oABFWmT/nwD/wQb/wAb/1FD/nwBEWmX/1U7/ngD/oQD/oQD/ogD/oQD/1FH/rwX/1FD/qgb/pwD/wQf/1U//oABFWmT/0kb/sBkak09hAAAAenRSTlMA3/vf3yAQ/vb32l/956FrSkDx0oH+7cCZW1UL/vz8+e/cyIFkRi8gFPz8/Pr69+PNt6WUi4Z6TzcjHhgIBf79/fz4+PPj4NzW1syxqJ2GfnVyKh4cFhD7+/j39/b07+zr6ejl5eHPx8KwoJ+WlZOMbFpPRURCMzAqGkNmyrwAAAKuSURBVEjHrdJnVxpBGIbhJ7qL0pFeFBUUsPeusbfYa3rvvbdxH/PXMyyu4iIu5uT64BnPmZt5hwH/ZO/jtUq9eLcH6fuDoyt48hPIPj+6kqdZvBGNtysP6qfFJlaFCB1XWsyFhFhCUgjhul5Z0eiSm5MQuu4KDmprEDqIgtBNq+JWhzASg8Vw00KUJKLh2HIocyI6ZssVs0lhTgzdbRc+RrcQZRMRmist2juEKTFpLHkMISwScf/ct3DcIKwTEbp7VtwRopKkSpuvP7l3l1ZbSVKradpMu37vGbmsskxkofvT1TVfWNVYJTVaiXvmxKoonQ2mqQwLy8sLZRpcUDQFv01Cmvy6sWi6jzmpKgTbkzjzqbrkHJjv0X8IjA2vKXa7I7KjAuP9mlT8PjBNFQT21+00eGQUNM4xJa4qo4j5yd70yG7Glw6Q/pjR1JiTQtEPDJOBOpzwOchh4HXhHJeRFN2jehxOMprAqcQA2YJcU/F9kDTOkLahhhnFOVGGJ7BV9D4uLMk/J+/xKAcPlSlItp2hIadNXwW4jsOms/dZxebpGdoGVNIHyeunpLRCqqP/AO81zbjPW2Qfnv6uvsBLh16Q9lSkk3a9aaYXnzWjeZYFfiwa/46jj0P5WdwMTACqg478lGn2IWfsefwL0u+tl9V5N/IfGAcQI1VI+2QdACcVoLqwJZiDiVvfM8AIdCl69cv0oLwe5qf/wF7oXjGtJ26Up9AJwEdmII2RHgBxNqO8NQ7mn9xNRQUyzaR/DOiTYXnewgyjdnLFQfYEyN4wOYrybJ0cgbS7QimiqrKjvwWXGaDbhrxMPKbqBzp9NlzqwM1UAsXqpmBhJD9P0aQpDsKKs5OKMXzCG6bdB0utCql4WuIxZzQsV7KwNhGlwT5oQ2VscU9AURwepw3/x18m3MHlze9p7wAAAABJRU5ErkJggg=="
                                        alt="icon" className="text-4xl dark:text-white"/>
                                </span>
                                    <div className="space-y-2"><p
                                        className="text-xl font-semibold dark:text-white">Email :</p>
                                        <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">developermanfred@gmail.com</p>
                                        <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">sr.coder.mr@gmail.com</p>
                                        <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">emanuel.perez@uadeo.mx</p>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-wrap dark:bg-transparent p-[30px]  border-[#A6A6A6] gap-2 rounded-xl "
                                    style={{background: 'rgb(242, 244, 255)'}}><span className="w-8 mt-2">
                                    <img
                                        src="data:image/png;base64,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"
                                        alt="icon" className="text-4xl dark:text-white"/>
                                </span>
                                    <div className="space-y-2"><p
                                        className="text-xl font-semibold dark:text-white">Address :</p><p
                                            className="text-gray-lite text-lg dark:text-[#A6A6A6] ">225 Bry Ave</p><p
                                        className="text-gray-lite text-lg dark:text-[#A6A6A6] ">Howell, New Jersey</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mt-8 lg:mt-0 lg:w-[60%] xl:w-[70%]">
                                <div data-aos="fade"
                                     className="dark:border-[#212425] dark:border-2 mb-16 md:p-[48px] p-4 bg-color-810 rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px] aos-init aos-animate">
                                    <h3 className="text-4xl">
                                        <span className="text-gray-lite dark:text-[#A6A6A6] ">I'm always open to discussing product.</span>
                                        <br/>
                                        <span
                                            className="font-semibold dark:text-white">... Backend, Frontend, Web & more ...</span>
                                    </h3>
                                    <form id="myForm" onSubmit={sendEmail}>
                                        <div className="relative  z-0 w-full mt-[40px] mb-8 group">
                                            <input type="text"
                                                   name="from_name"
                                                   id="user_name"
                                                   className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
                                                   placeholder=" "
                                                   required={true}/>
                                            <label
                                            htmlFor="name"
                                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Name*</label>
                                        </div>
                                        <div className="relative z-0 w-full mb-8 group">
                                            <input type="email"
                                                   name="user_email"
                                                   className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
                                                   placeholder=" "
                                                   id="user_email"
                                                   required={true}/>
                                            <label
                                                htmlFor="user_email"
                                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Email*</label></div>
                                        <div className="relative z-0 w-full mb-8 group">
                                            <textarea
                                                                                               name="message"
                                                                                               className="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
                                                                                               placeholder=" "
                                                                                               id="message"
                                                                                               required={true}/>
                                            <label
                                            htmlFor="message"
                                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Message*</label>
                                        </div>
                                        <div
                                            className="transition-all duration-300  ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg  mt-3">
                                            <input type="submit"
                                                   className=" transition ease-in duration-200 font-semibold cursor-pointer border-color-910   hover:border-transparent px-6  py-2 rounded-lg border-[2px]  hover:text-white   dark:text-white "
                                                   value="Enviar"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
        ;
}
