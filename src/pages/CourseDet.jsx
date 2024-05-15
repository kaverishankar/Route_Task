
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import data from './data.json'

const Details = (props) =>
    {
       return(
        <div style={{
            border: "1px solid",
        textAlign: "center",
        padding: "16px",
        position:'relative',
        backgroundColor : 'seashell'
        }}>
            <img style={{height: "200px", width: "300px", objectFit: "contain" }} src={props.image}></img>
            <h1>{props.name}</h1>
            <h3>{props.description}</h3>
        </div>
       );
    };

Details.PropTypes={
  id : PropTypes.number,
  name : PropTypes.string,
  description : PropTypes.string,
  image : PropTypes.string,
}

const Detail = () =>
    {
       const {DetName} = useParams();
       return(
        <>
        <Details {...data.find((item) => item.name === (DetName))}/>
        </>
         
       );
    };

export default Detail   
 