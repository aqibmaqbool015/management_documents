export const SelectInput = (props) => {
    return (

        <>

            <div className="!mt-3">
                <label className="text-[17px] text-customDarkGray" for="grid-state">
                    {props.label}
                </label>
                <div className="relative !mt-0">
                    <div className="relative w-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-customGradiantFrom to-customGradiantTo rounded-[25px] pointer-events-none"></div>
                        <select className="appearance-none mt-1 block w-full px-3 py-2 shadow-sm placeholder-customDarkGray focus:outline-none focus:ring-customGradiantFrom focus:border-customGradiantFrom border border-[#CFCFCF] rounded-[25px] bg-transparent relative z-10" id="grid-state">
                            {props.options?.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                        <svg className="w-4 h-4 text-customDarkGray" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                        
                    </div>

                </div>
            </div>
        </>
    )
}