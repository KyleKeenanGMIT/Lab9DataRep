import Card from 'react-bootstrap/Card';//card import.
import { Link } from 'react-router-dom';//link import. - used to create the button to change URL.

function BookItem(props){
     
    return (
        <div>
             <Card> {/* card added from react */}
      <Card.Header>{props.myBook.title}</Card.Header>
      <Card.Body>
      <img src={props.myBook.cover}></img>
      <p>{props.myBook.author}</p>
        
      </Card.Body>
      <Link to = {"/edit/"+props.myBook._id} className='btn btn-primary'>Edit</Link> {/* button to change url to /edit - btn primary displays the blue outline around the button bring me to my chose book to edit */}
    </Card>

           
        </div>
        
    );
    
    
}
export default BookItem;