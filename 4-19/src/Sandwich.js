import Bread from './Bread'

function Sandwich(props) {

    // const showtoppings = () => {
    //     return props.toppings.map((eachTopping, i) => {
    //         return <li key={i}>{eachTopping.name}</li>
    //     })
    // }
    return (
        <b>
            <Bread bread={props.bread} />
            {/* {showtoppings()} */}
            <div>{props.toppings.join('~')}</div>
            <div>{props.cheese}</div>
            <div>{props.protein}</div>

            <Bread {...props} />
        </b>
    )
}
export default Sandwich