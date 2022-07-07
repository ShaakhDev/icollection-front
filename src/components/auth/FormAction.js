import { DisabledBtn } from "../button/DisabledBtn"
import { PrimaryBtn } from "../button/PrimaryButton"

function FormAction({
    text,
    isLoading,
    handleSubmit,
}) {
    return (
        <>
            {isLoading ? (
                <DisabledBtn text='Sending...' handleSubmit={handleSubmit} />
            ) : (
                <PrimaryBtn text={text} handleSubmit={handleSubmit} />
            )}
        </>
    )
}

export default FormAction