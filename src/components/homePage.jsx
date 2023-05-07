import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faCirclePlus,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from "react";
import TextComponent from "./TextComponent";

function HomePage() {

    const [data1, setData] = useState([])
    const [show,setHide]=useState('false')
    const [checkedValues, setCheckedValues] = useState([]);
    const [data2,setData2]=useState([])

    const handleCheckboxChange =(e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setCheckedValues(prev => {
            let updatedValues;

            if (isChecked) {
                updatedValues = [...prev, value];
                console.log("updatedValues",updatedValues)
                console.log("...prev",prev)
                console.log("value",value)


            } else {
                updatedValues = prev.filter((item) => item !== value);
            }
            console.log("update",updatedValues)

            const filteredData = data2.filter((item) => updatedValues.includes(item.location))
            setData(filteredData)

            if(updatedValues.length==0){
                setData(data2)
            }


            return updatedValues
        });
    };


    const handleSubmit = () => {
    };

    const showHide=()=>{
        setHide(!show)
    }

    const fetchData= async () =>{
        try{
            const response= await fetch('http://localhost:8000/data1')
            const json= await response.json()

            setData(json)
            setData2(json)
        }catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])


        return (
            <>
                <div className="w-full">

                    <div
                        className="flex items-center justify-center flex-col title-font font-medium text-gray-900 mb-4 md:mb-0 mt-3">

                        <svg width="50" height="53" viewBox="0 0 60 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M17.4554 18L29.8064 36.8759L42.1575 18L59.6129 18L29.8064 63L0 18L17.4554 18ZM17.4554 18L5.67742 0L53.9355 3.48837e-06L42.1575 18L17.4554 18Z"
                                  fill="#FF0D87"/>
                        </svg>

                        <h1 className="mt-12 text-3xl">
                            ETKİNLİKLER
                        </h1>

                    </div>

                    <section className="mt-5 md:mx-auto ml:mx-auto flex flex-wrap">

                        <nav className="md:ml-auto md:mr-auto flex items-center justify-center text-sm mt-8">
                            <Link to="/" className="block py-1 pl-2 pr-2 hover:text-pink-600">Tüm Etkinlikler</Link>
                            <p   className="block py-1 pl-2 pr-3 hover:text-cpink">Tiyatro</p>
                            <p   className="block py-1 pl-2 pr-3 hover:text-cpink">Konser</p>
                            <p  className="block py-1 pl-2 pr-3 hover:text-cpink">Stand Up</p>
                            <p   className="block py-1 pl-2 pr-3 hover:text-cpink">Sinema</p>
                            <p  className="block py-1 pl-2 pr-3 hover:text-cpink">Çocuk</p>

                        </nav>

                        <div className="flex -mt-4">

                            <FontAwesomeIcon icon={faMagnifyingGlass} className="mt-16 z-10 -mx-20 my-5"/>
                            <input className="mt-14 w-36 h-10 mx-12 -my-12 border-cgray border-2  z-0" type="text"
                                   placeholder="           Etkinlik ara"/>

                        </div>
                    </section>

                    <section className="flex justify-between w-full h-10 bg-gray-100 border-1 mt-8">

                        <div className="flex ml-12">
                            <svg className="mt-2 -mr-8" width="10" height="20" viewBox="0 0 10 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="2" cy="2" r="1.5" fill="black" stroke="black"/>
                                <circle cx="8" cy="9" r="1.5" fill="black" stroke="black"/>
                                <circle cx="2" cy="16" r="1.5" fill="black" stroke="black"/>
                            </svg>

                            {/*  FİLTER START */}

                            <div>
                                <div className="mt-2" id="filterId" onSubmit={handleSubmit}>

                                    <button id="dropdownDefault" data-dropdown-toggle="dropdown" onClick={showHide}
                                            className="text-black ml-12 inline-flex
                        items-center"
                                            type="button">
                                        Filtreler
                                    </button>

                                    <div id="dropdown"  hidden={show} className="z-50 w-56 p-3 ml-4 h-auto bg-dwhite focus:text-cpink">
                                        <h6 className="mb-3 mt-2 text-sm font-medium text-cblack ">
                                            Etkinlik Mekanı
                                        </h6>
                                        <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                                            <li className="flex items-center z-40">
                                                <input
                                                    type="checkbox"
                                                    value="Maximum UNIQ Hall"
                                                    checked={checkedValues.includes('Maximum UNIQ Hall')}
                                                    onChange={handleCheckboxChange}

                                                    className="w-4 h-4 text-cblack"/>
                                                <label htmlFor=""
                                                       className="ml-2 text-xs font-medium text-cblack">
                                                    Maximum Uniq Hall
                                                </label>
                                            </li>
                                            <li className="flex items-center z-40">
                                                <input  type="checkbox"

                                                        value="Maximum UNIQ Box"
                                                        checked={checkedValues.includes('Maximum UNIQ Box')}
                                                        onChange={handleCheckboxChange}
                                                        className="w-4 h-4 text-cblack"/>
                                                <label htmlFor=""
                                                       className="ml-2 text-xs font-medium text-cblack">
                                                    Maximum Uniq Box
                                                </label>
                                            </li>
                                            <li className="flex items-center">
                                                <input type="checkbox"

                                                       value="Maximum UNIQ Lounge"
                                                       checked={checkedValues.includes('Maximum UNIQ Lounge')}
                                                       onChange={handleCheckboxChange}
                                                       className="w-4 h-4 text-cblack"/>
                                                <label htmlFor=""
                                                       className="ml-2 text-xs font-medium text-cblack">
                                                    Maximum Uniq Lounge
                                                </label>
                                            </li>
                                            <li className="flex items-center">
                                                <input  type="checkbox"

                                                        value="Maximum UNIQ Açıkhava"
                                                        checked={checkedValues.includes('Maximum UNIQ Açıkhava')}
                                                        onChange={handleCheckboxChange}
                                                        className="w-4 h-4 text-cblack"/>
                                                <label htmlFor=""
                                                       className="ml-2 text-xs font-medium text-cblack">
                                                    Maximum Uniq Açıkhava
                                                </label>
                                            </li>
                                            <li className="flex items-center">
                                                <input type="checkbox"

                                                       value="Bahçe Fuaye"
                                                       checked={checkedValues.includes('Bahçe Fuaye')}
                                                       onChange={handleCheckboxChange}
                                                       className="w-4 h-4 text-cblack"/>
                                                <label htmlFor=""
                                                       className="ml-2 text-xs font-medium text-cblack">
                                                    Bahçe Fuaye
                                                </label>
                                            </li>

                                        </ul>

                                        <h6 className="mb-3 mt-2 text-sm font-medium text-cblack ">
                                            Etkinlik Tarihi
                                        </h6>
                                        <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                                            <li className="flex items-center">
                                                <input  type="checkbox"
                                                        className="w-4 h-4 text-cblack bg-cpink "/>
                                                <label htmlFor=""
                                                       className="ml-2 text-xs font-medium text-cblack">
                                                    Güncel Etkinlikler
                                                </label>
                                            </li>
                                            <li className="flex items-center">
                                                <input  type="checkbox"
                                                        className="w-4 h-4 text-cblack"/>
                                                <label htmlFor=""
                                                       className="ml-2 text-xs font-medium text-cblack">
                                                    Geçmiş Etkinlikler
                                                </label>
                                            </li>

                                        </ul>
                                    </div>

                                </div>

                            </div>


                            {/*  filter butonu finished*/}
                        </div>

                        <p className="py-1 pl-2 pr-2 mt-1 mr-12">
                            <FontAwesomeIcon icon={faCalendar} className="px-2"/>
                            Takvimde Gör
                        </p>

                    </section>


                    <body>


                    {data1?.map((x)=>
                        <div className="container flex h-52 border-2 relative m-auto text-sm mt-6 w-2/3 sm:w-3/4">
                            <div className="flex border-0 bg-black 2xl:w-52 z-0 xl:w-1/4 lg:w-64 sm:w-36">
                                <p className="flex flex-col text-cpink 2xl:ml-4 xl:ml-8 w-4 mt-14 lg:ml-7 sm:ml-4" >{x.date}</p>
                            </div>

                            <div className="relative right-52 flex mt-2">
                                <h2 className="relative 2xl:left-24 xl:left-24 xl:mt-4 text-center h-6 2xl:w-36 lg:ml-28
                            bg-corange text-white 2xl:mt-6 z-10 sm:ml-40">{x.type}
                                </h2>
                                <img className="2xl:h-44 relative 2xl:-right-5 z-0 2xl:mt-1 xl:-right-4
                                xl:mb-2 lg:right-12 lg:w-52 lg:mb-2  sm:w-48 sm:-ml-1 sm:mb-2"
                                     src={x.image}/>
                            </div>

                            <div className="flex mt-4 font-medium xl:w-2/3 xl:-ml-3 2xl:-ml-24 lg:w-2/4 md:w-2/4 ">
                                <div className="flex flex-col -ml-36 xl:-ml-14">
                                    <h2>{x.name}</h2>
                                    <p className="text-cgray 2xl:ml-4 2xl:mt-3 2xl:mb-3">{x.location}</p>

                                    <TextComponent text={x.text} />
                                </div>
                                <div className="flex flex-col 2xl:-ml-40 2xl:mr-4 2xl:mt-3 xl:mt-5 lg:mt-3 lg:mr-2">
                                    <button className="w-44 h-14 border-2 bg-cpink text-cwhite
                                     xl:w-36 xl:h-10 lg:w-32 lg:h-9 md:w-28 md:h-8 ">
                                        Bilet al
                                    </button>

                                    <div className=" px-9 py-4 xl:px-2 xl:py-2 lg:px-1">
                                        <FontAwesomeIcon icon={faCirclePlus} className="w-5 h-5 xl:w-4 xl:w-4 xl:-my-1 mt-1 lg:m-2 md:-ml-7"/>
                                        <p className="lg:-mt-8 lg:ml-8 md:-mt-6 md:ml-1  ">
                                            Takvime ekle
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}
                    </body>

                </div>

            </>

        )




}
export default HomePage
