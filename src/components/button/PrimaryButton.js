
export const PrimaryBtn = ({ handleSubmit, text }) => {
    return (
        <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-accent-color-1 to-accent-color-2 focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
            onSubmit={handleSubmit}
        >
            {text}
        </button>
    )
}