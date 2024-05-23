import Image from 'next/image';
import React from 'react'

const Details = ({ data }) => {
    console.log(data);
    const list = data?.list;
    function formatDate(input) {
        // Create a new Date object from the input string
        let date = new Date(input);

        // Get the day, month, and time parts
        let day = date.getDate();
        let month = date.toLocaleString('default', { month: 'short' });
        let hours = date.getHours();
        let minutes = date.getMinutes();

        // Convert hours from 24-hour format to 12-hour format and determine AM/PM
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'

        // Ensure minutes are always two digits
        minutes = minutes < 10 ? '0' + minutes : minutes;

        // Format the time part
        let time = `${hours}:${minutes} ${ampm}`;

        // Return the formatted date and time
        return `${day} ${month} ${time}`;
    }

    return (
        <div>
            <div className='flex justify-center text-3xl p-4 font-bold  text-yellow-500'>
                City: {data?.city?.name}
            </div>
            <div className='flex gap-8 justify-center items-center flex-wrap'>


                {

                    list?.slice(0, 10).map((item, i) => (
                        <div key={i} className='border border-yellow-400  bg-indigo-400 text-white p-8 rounded-2xl m-4'>
                            <div className='flex gap-4 items-center mb-4'>
                                <Image
                                    src="/assets/sun.png"
                                    width={80}
                                    height={50}
                                    className=''
                                    alt="Picture of the weather"
                                ></Image>
                                <div>
                                    <p className='text-xl font-semibold'>{formatDate(item.dt_txt)}</p>
                                    <p className='text-lg'>{item.weather[0].description}</p>
                                </div>

                            </div>

                            <div className='grid grid-cols-2  gap-4  font-semibold w-full'>
                                <div>Feels Like:</div>
                                <div>{item.main.feels_like}</div>
                                <div>Temp max:</div>
                                <div>{item.main.temp_max}</div>
                                <div>Temp min:</div>
                                <div>{item.main.temp_min}</div>
                                <div>Humidity</div>
                                <div>{item.main.humidity}</div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Details