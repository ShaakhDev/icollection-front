
export const DisabledBtn = ({ handleSubmit, text }) => {
    return (
        <button
            type="submit"
            className="group relative  w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400
              focus:outline-none focus:ring-2 focus:ring-offset-2  mt-10"
            onSubmit={handleSubmit}
            disabled
        >
            {text}
        </button>
    )
}