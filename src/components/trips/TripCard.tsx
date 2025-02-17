import { Link } from 'react-router-dom';
import { TripObjType } from "../../types/types"
import { getNiceDate } from '../../utils/helpers';

type TripCardProps = {
    item: Omit<TripObjType, 'id'>;
};

export default function TripCard({ item }: TripCardProps) {
  return (
  <div className='border p-4 rounded'>
    <img src={'/img/' + item.image_main} alt={item.name} className='img-fluid' />
    <h3>{item.name}</h3>
    <p className='lead'>{getNiceDate(item.date)}</p>
    <p>
      <span className='fw-bold'>{item.country}</span> - {item.city}
    </p>
    <p className=''>{item.price} eur</p>
    <Link to={`/trips/${item.id}`}>
      <button className='btn btn-info'>Read more</button>
    </Link>
  </div>
  );
  }
