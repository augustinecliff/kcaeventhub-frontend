export function ErrorModal({message}) {

    return (

        <>
            <div className="modal-box text-center flex flex-col items-center justify-center">
                <hp className="font-bold text-4xl">Error</hp>
                <p className="pt-4">{'Something went wrong'}</p>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-secondary">Done</button>
                    </form>
                </div>
            </div>
        </>
    )

}
