
import { PaintBrushIcon, CodeBracketIcon, CircleStackIcon, GlobeAltIcon, RocketLaunchIcon } from "@heroicons/react/20/solid"
import profile from "../assets/profile.png"
import iconsvg from "../assets/iconsvg.json"
export default function About() {
    return <div>
        <section className="bg-blue-50 lg:rounded-2xl dark:bg-[#111111]">
            <div data-os="fade" className="aos-init aos-animate">
                <div className="container sm:px-5 md:px-10 lg:px-20">
                    <div className="py-12 px-4">
                        <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 text-[#001c64] tracking-tight dark:text-slate-200">About
                            Me</h1>
                        <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
                            <div className="col-span-12 md:col-span-4"><img
                                className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
                                src={profile} alt="" /></div>
                            <div className="col-span-12 md:col-span-8 space-y-2.5">
                                <div className=" md:mr-12 xl:mr-16"><h3
                                    className="text-4xl font-medium dark:text-white mb-2.5 ">Who
                                    am
                                    i?</h3><p className="text-gray-lite  dark:text-color-910 leading-7">I'm Software Developer
                                        from Mexico, working in frontend and backend. I enjoy turning complex problems into simple,
                                        beautiful and intuitive designs.</p><p
                                            className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">I created web apps and
                                        hybrid apps for many private companies.</p>
                                </div>
                                <div><h3 className="text-4xl font-medium my-5 dark:text-white">Personal Info</h3>
                                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="flex"><span
                                            className="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-"><svg
                                                stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512"
                                                height="1em"
                                                width="1em" xmlns="http://www.w3.org/2000/svg"><path
                                                    d={iconsvg.pathPhone}></path></svg></span>
                                            <div className="space-y-1"><p
                                                className="text-xs text-gray-lite dark:text-color-910">Phone</p><h6
                                                    className="font-medium dark:text-white"><a
                                                        className="hover:text-[#FA5252] duration-300 transition"
                                                        href="tel:+1234567890">+8482240128</a></h6></div>
                                        </div>
                                        <div className="flex"><span
                                            className="text-oriange-lite dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-"><svg
                                                stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512"
                                                height="1em"
                                                width="1em" xmlns="http://www.w3.org/2000/svg"><path
                                                    d={iconsvg.pathLocation}></path></svg></span>
                                            <div className="space-y-1"><p
                                                className="text-xs text-gray-lite dark:text-color-910">Location</p><h6
                                                    className="font-medium dark:text-white">Howell, NJ</h6></div>
                                        </div>
                                        <div className="flex"><span
                                            className="text-green dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-"><svg
                                                stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                                                height="1em"
                                                width="1em" xmlns="http://www.w3.org/2000/svg"><path
                                                    d={iconsvg.pathEmail}></path></svg></span>
                                            <div className="space-y-1"><p
                                                className="text-xs text-gray-lite dark:text-color-910">Email</p><h6
                                                    className="font-medium dark:text-white"><a
                                                        className="hover:text-[#FA5252] duration-300 transition"
                                                        href="mailto:ibthemes21@gmail.com">developermanfred@gmail.com</a>
                                                </h6></div>
                                        </div>
                                        <div className="flex"><span
                                            className="text-color-50 dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-"><svg
                                                stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
                                                height="1em"
                                                width="1em" xmlns="http://www.w3.org/2000/svg"><path
                                                    d={iconsvg.pathCalendar}></path></svg></span>
                                            <div className="space-y-1"><p
                                                className="text-xs text-gray-lite dark:text-color-910">Birthday</p><h6
                                                    className="font-medium dark:text-white">Jan 15, 1993</h6></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pb-12 "><h3 className="text-[35px] dark:text-white font-medium pb-5">What I do!</h3>
                        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
                            <div className="about-box dark:bg-transparent" style={{ background: "rgb(252, 244, 255)" }}>
                                <div className="space-y-2"><h3 className="dark:text-gray-700 text-2xl font-semibold">
                                    <PaintBrushIcon className="w-5 h-5 text-indigo-600" />
                                    Ui/Ux
                                    Design</h3><p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">I create beautiful, responsive layouts and human-friendly interfaces using the most populars frameworks UI like Bootstrap, Materialize, React MUI, PrimeNG, PrimeReact, Vuetify Bulma and more...</p></div>
                            </div>
                            <div className="about-box dark:bg-transparent" style={{ background: "rgb(254, 250, 240)" }}>
                                <div className="space-y-2"><h3 className="dark:text-gray-700 text-2xl font-semibold">
                                    <CodeBracketIcon className="w-5 h-5 text-indigo-600" />
                                    App
                                    Development</h3><p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">Using Ionic Framework, Xamarin, Flutter, React Native and more, your business can have its own web, desktop or mobile application </p></div></div>
                            <div className="about-box dark:bg-transparent" style={{ background: "rgb(252, 244, 255)" }}>
                                <div className="space-y-2"><h3
                                    className="dark:text-gray-700 text-2xl font-semibold">
                                    <CircleStackIcon className="w-5 h-5 text-indigo-600" />
                                    Backend Development</h3><p
                                        className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">Using C#, Javascript, Typescript, MySql, PostgreSQL and more, the manipulation of your business data, in your hands! </p></div></div>
                            <div className="about-box dark:bg-transparent" style={{ background: "rgb(255, 244, 244)" }}>
                                <div className="space-y-2"><h3
                                    className="dark:text-gray-700 text-2xl font-semibold">
                                    <GlobeAltIcon className="w-5 h-5 text-indigo-600" />
                                    Web
                                    Development</h3><p
                                        className=" leading-8 text-gray-lite dark:text-[#A6A6A6]"> Using Angular, ReactJs, VueJs and more your bussiness available to everyone.</p></div>
                            </div>
                            <div className="about-box dark:bg-transparent" style={{ background: "rgb(255, 240, 248)" }}>
                                <div className="space-y-2"><h3 className="dark:text-gray-700 text-2xl font-semibold">
                                    <RocketLaunchIcon className="w-5 h-5 text-indigo-600" />
                                    More?</h3>
                                    <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">RestApis, Mockups, hybrids apps, freelance, etc</p></div>
                            </div>
                            {/*<div className="about-box dark:bg-transparent" style={{background: "rgb(243, 250, 255)"}}><img
                        className="w-10 h-10 object-contain block"
                        src="" alt=""/>
                        <div className="space-y-2"><h3 className="dark:text-gray-700 text-2xl font-semibold">Web
                            Development</h3><p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">Lorem ipsum
                            dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p></div>
                    </div>*/}
                        </div>
                    </div>
                </div>


            </div>
        </section>

    </div>
}
