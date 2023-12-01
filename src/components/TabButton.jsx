import {motion} from 'framer-motion'

const variants = {
    default: {width: 0},
    active: {width: "calc(100% - 0.75rem)"},
};

// eslint-disable-next-line react/prop-types
const TabButton = ({active,selectTab, children}) => {
    const buttonClases = active ? "text-white" : "text-[#ADB7BE]";

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClases}`}>
                {children}
            </p>
            <motion.div
                animate={active ? "active" : "default"}
                variants={variants}
                className='h-1 bg-primary-400 mt-2 mr-3'
            ></motion.div>
        </button>
    );
};

export default TabButton;