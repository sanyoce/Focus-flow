import notificationIcon from '../../assets/icons/bell.png'

export function Header(){
    return(
        <div className="flex justify-between">
            <div className="flex flex-col gap-2">
                <h1 className="text-gray-900 font-semibold text-2xl">Good morning, NAME! 👋</h1>
                <p className="text-gray-500 text-1xl">Let's make today productive</p>
            </div>
            <div className="flex gap-3 items-center">
                <button className='shadow-sm hover-shadow-md py-1.5 px-0 rounded-2xl text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'><img src={notificationIcon} alt="#" className='w-14'/></button>
                <button className='shadow-sm hover-shadow-md px-5 py-3 rounded-full bg-purple-500 text-white hover:bg-purple-600 '><p className='m-o'>А</p></button>
            </div>
        </div>
    )
}