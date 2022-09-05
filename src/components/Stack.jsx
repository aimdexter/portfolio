const Stack = (props) => {
    return (
        <div className="hover:bg-gradient-to-r cursor-none hover:from-dark hover:to-brand border-2 rounded-md px-2 py-1 text-xs border-brandLight transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110">
            {props.content}
        </div>
    );
}

export default Stack;