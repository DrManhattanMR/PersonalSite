import React from "react";
import "./More.css"
type Props = {};

export default function Resume({ }: Props) {
    return <div>
        <section className="bg-blue-50  lg:rounded-2xl dark:bg-[#111111]">
            <div data-aos="fade" className="aos-init aos-animate">
                <div className="container  sm:px-5 md:px-10 lg:px-20">
                    <div className="py-12 px-4"><h2
                        className="after-effect after:left-44 text-2xl sm:text-3xl font-extrabold text-slate-900 mb-[40px] mt-1 dark:text-slate-200 lg:mt-0 text-[#001c64]">Resume</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 ">
                            <div>
                                <div className="flex items-center space-x-2 mb-6 ">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                        className="text-4xl text-[#F95054]" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path
                                            d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"></path>
                                    </svg>
                                    <h4 style={{ fontSize: '1.625rem', fontWeight: 700 }}
                                        className={'dark:text-white'}>Education</h4>
                                </div>
                                <div
                                    className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#212425] dark:border-2"
                                    style={{ background: "rgb(255, 244, 244)" }}><span
                                        className="text-tiny text-gray-lite dark:text-[#b7b7b7]">2019-2022</span>
                                    <h3 style={{ fontFamily: 'Sans-Serif', fontWeight: 600, color: '#001c64' }} className={"text-l" +
                                        " dark:text-[#001c64]"}>Máster System Computer Engineering </h3>
                                    <p className="dark:text-[#b7b7b7]">UAIS University, Sinaloa, MX</p>
                                </div>
                                <div
                                    className="py-4 pl-5 pr-3 space-y-2 rounded-lg mb-6 dark:border-[#212425] dark:border-2"
                                    style={{ background: "rgb(255, 244, 244)" }}><span
                                        className="text-tiny text-gray-lite dark:text-[#b7b7b7]">2018-2019</span>
                                    <h3 style={{ fontFamily: 'Sans-Serif', fontWeight: 600, color: '#001c64' }}
                                        className="text-l dark:text-[#001c64]">Intern Communication Engineering </h3><p
                                            className="dark:text-[#b7b7b7]">UIMQROO, Quintana Roo, MX</p>
                                </div>
                                <div
                                    className="py-4 pl-5 pr-3 space-y-2 rounded-lg  mb-6 dark:border-[#212425] dark:border-2"
                                    style={{ background: "rgb(255, 241, 251)" }}><span
                                        className="text-tiny text-gray-lite dark:text-[#b7b7b7]">2013 - 2018</span>
                                    <h3 style={{ fontFamily: 'Sans-Serif', fontWeight: 600, color: '#001c64' }}
                                        className="text-l dark:text-[#001c64]">Computer System Engineer</h3><p
                                            className="dark:text-[#b7b7b7]">UAIS University, Sinaloa, MX.</p>
                                </div>

                            </div>
                            <div>
                                <div className="flex items-center space-x-2 mb-6 ">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                        className="text-4xl text-[#F95054]" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path
                                            d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z"></path>
                                    </svg>
                                    <h4 style={{ fontSize: '1.625rem', fontWeight: 700 }}
                                        className={'dark:text-white'}>Experience</h4></div>
                                <div
                                    className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#212425] dark:border-2"
                                    style={{ background: "rgb(238, 245, 250)" }}><span
                                        className="text-tiny text-gray-lite dark:text-[#b7b7b7]">2018-2020</span>
                                    <h3 style={{ fontFamily: 'Sans-Serif', fontWeight: 600, color: '#001c64' }}
                                        className="text-l dark:text-[#001c64]">Backend and Frontend Developer</h3><p
                                            className="dark:text-[#b7b7b7]">UAdeO University, Sinaloa, MX.</p></div>
                                <div
                                    className="py-4 pl-5 pr-3 space-y-2 rounded-lg  mb-6 dark:border-[#212425] dark:border-2"
                                    style={{ background: "rgb(242, 244, 255)" }}><span
                                        className="text-tiny text-gray-lite dark:text-[#b7b7b7]">2019-2021</span><h3
                                            style={{ fontFamily: 'Sans-Serif', fontWeight: 600, color: '#001c64' }}
                                            className="text-l dark:text-[#001c64]">Backend and Frontend Developer</h3><p
                                                className="dark:text-[#b7b7b7]">UAIS University, Sinaloa, MX.</p></div>
                                <div
                                    className="py-4 pl-5 pr-3 space-y-2 rounded-lg  dark:border-[#212425] dark:border-2"
                                    style={{ background: "rgb(238, 245, 250)" }}><span
                                        className="text-tiny text-gray-lite dark:text-[#b7b7b7]">2020-2021</span><h3
                                            style={{ fontFamily: 'Sans-Serif', fontWeight: 600, color: '#001c64' }}
                                            className="text-l dark:text-[#001c64]">Angular & C# Developer</h3><p
                                                className="dark:text-[#b7b7b7]">Gaxiola's System, Sinaloa, MX.</p></div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20">
                    <div className="grid grid-cols-1  md:grid-cols-1 gap-8">

                        <div className="col-span-1"><h4
                            className="text-3xl dark:text-white font-medium mb-8">Knowledges</h4>
                            <div className="flex gap-x-3 gap-y-3 md:gap-y-6 md:gap-x-4 flex-wrap">
                                <button className="resume-btn dark:text-[#001c64] border-[#6366f1]">REST Api</button>
                                <button className="resume-btn dark:text-[#001c64] border-[#6366f1]">DevExpress</button>
                                <button className="resume-btn dark:text-[#001c64] border-[#6366f1]">C#</button>
                                <button className="resume-btn dark:text-[#001c64] border-[#6366f1]">Typescript</button>
                                <button className="resume-btn dark:text-[#001c64] border-[#6366f1]">Javascript</button>
                                <button className="resume-btn dark:text-[#001c64] border-[#6366f1]">Sql</button>
                                <button className="resume-btn dark:text-[#001c64] border-[#6366f1]">Net, Net Core</button>
                                <button className="resume-btn dark:text-[#001c64] border-[#6366f1]">NodeJs</button>
                                <button className="resume-btn dark:text-[#001c64] border-[#6366f1]">React</button>
                                <button className="resume-btn dark:text-[#001c64] border-[#6366f1]">Vue</button>
                                <button className="resume-btn dark:text-[#001c64] border-[#6366f1]">Ionic Framework</button>
                                <button className="resume-btn dark:text-[#001c64] border-[#6366f1]">Angular</button>
                                <button className="resume-btn dark:text-[#001c64] border-[#6366f1]">Bootstrap</button>
                                <button className="resume-btn dark:text-[#001c64] border-[#6366f1]">PrimeNG</button>
                                <button className="resume-btn dark:text-[#001c64] border-[#6366f1]">Prime React</button>
                                <button className="resume-btn dark:text-[#001c64] border-[#6366f1]">And More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>;
}
