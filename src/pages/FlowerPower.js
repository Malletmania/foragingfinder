import react, {useState, useEffect} from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import FlowerCards from '../components/FlowerCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../utils/auth';

function FlowerPower() {
  const [flowerItems, setFlowerItems] = useState([]);

  useEffect(() => {
    getFlowerListData()
  })

  const getFlowerListData = async() => {
    const token = Auth.loggedIn()? Auth.getToken() : null;

    const respose = await getFlowerListData(token)
    const {FlowerPower} = await Response.json()
    setFlowerItems(FlowerPower)
  }

  const removeFlowerItem = (flower) => {
    const userId = Auth.getProfile().data._id
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    console.log(flower.apiId)
    flower = {apiId: flower.apiId, onFlowerList: true}
    console.log(token)
    deleteGame(token, wish, userId)

    console.log("id")
  };

  return(
    <div>
      <h1>Wildflower list</h1>
      <CardGroup>
        { flowerItems.map( wish => (
          <flowerListCard
          key={wish._id}
          wish={wish}
          setFlowerToCollected={setFlowerToCollected}
          removeFlowerListItem={removeFlowerItem}
          />
        ))}
      </CardGroup>
    </div>
  );
}