import Capture from '../Capture.JPG'
console.log(Capture)
const Image =() =>{
    return(
        <div className="content">
            <img 
            src={Capture} alt="image" style={ {margin:"40px",marginLeft:"43%"}}
            />

        </div>

    );
}

export default Image;