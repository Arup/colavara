const getRandom = () => Math.floor(Math.random())
const Heading = (props) => {
    return <h1>Hello {getRandom}, {props.firstName}</h1>;
}

export default Heading

