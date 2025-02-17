//

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TripObjType } from "../../types/types";
import { beBaseUrl } from "../../config";
import axios from "axios";
import { getNiceDate } from "../../utils/helpers";

type tripParam = {
  readonly tripId: string;
};

export default function SingleTripsPage() {
  const { tripId } = useParams() as tripParam;

  const [currentTrip, setCurrentTrip] = useState<TripObjType | null>(null);

  useEffect(() => {
    const cUrl = `${beBaseUrl}/${tripId}`;
    console.log('cUrl ===', cUrl);
    getTrip(cUrl);
  }, []);

  async function getTrip(url: string) {
    try {
      const resp = await axios.get(url);
      console.log('resp ===', resp);
      setCurrentTrip(resp.data);
    } catch (error) {
      console.warn('getTrip', error);
    }
    //
  }





  return (
    <div>
        <div className='container'>
          <div className='left'>
            <img
              className='img-fluid'
              src={'/img/' + currentTrip?.image_main}
              alt={currentTrip?.name}
            />
          </div>
          <div className='right'>
            <h1 className='display-2'>{currentTrip?.name}</h1>
            <p className='lead'>{getNiceDate(currentTrip?.date || '')}</p>
            <p>
              <span className='fw-bold'>{currentTrip?.country}</span> - {currentTrip?.city}
            </p>
            <p className=''>{currentTrip?.description}</p>
            <div className='control d-f\ gap-2'>
              <button className='btn btn-secondary'>Go back</button>
              <button className='btn btn-danger'>Delete</button>
            </div>
          </div>
        </div>
    </div>
  );
}
