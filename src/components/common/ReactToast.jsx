import {toast, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {useEffect} from "react";


function ReactToast(props) {
    useEffect(() => {
        notify()
    }, []);
    const notify = () => {
        switch (props.type) {
            case 'success':
                return toast.success(props.text);
            case 'error':
                return toast.error(props.text);
            case 'info':
                return toast.info(props.text);
            case 'warning':
                return toast.warning(props.text);
            default:
                return toast(props.text, {
                    className: 'foo-bar'
                });
        }
    };


    return (
        <>
            {/*<button className={'btn btn-outline-danger'} onClick={notify}>Notify</button>*/}
            <ToastContainer/>
        </>
    );
}

export default ReactToast