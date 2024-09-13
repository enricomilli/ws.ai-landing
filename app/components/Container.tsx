
export default function Container(props: { children: JSX.Element }) {

    return (
        <div className="p-5 md:p-10">
            {props.children}
        </div>
    )
}
