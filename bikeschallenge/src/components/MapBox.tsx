import React, {memo} from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
	width: '100%',
	height: '400px'
};

type MapProps = {
	lat: number,
	long: number
}

const MapBox = ({ lat, long }: MapProps) => {

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: "AIzaSyDn6OnnzaWt_eX29mfXB_zXGnTE8ohAk9E"
	})

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={{
				lat: lat,
				lng: long
			}}
			zoom={15}>
		</GoogleMap>
	) : <></>
}

export default memo(MapBox)