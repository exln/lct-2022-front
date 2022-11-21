import L, { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet'
import 'react-leaflet-markercluster/dist/styles.min.css'

import { markersData } from '@/ui/mapBox/map.data'

import MarkerClusterGroup from '@/utils/react-leaflet-markercluster'

import styles from './mapBox.module.scss'

const center: LatLngExpression = [55.754173, 37.621932]

function customMarkerIcon(color: string) {
	const svgTemplate = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="marker">
      <path fill-opacity=".25" d="M16 32s1.427-9.585 3.761-12.025c4.595-4.805 8.685-.99 8.685-.99s4.044 3.964-.526 8.743C25.514 30.245 16 32 16 32z"/>
      <path fill="#${color}" stroke="#fff" d="M15.938 32S6 17.938 6 11.938C6 .125 15.938 0 15.938 0S26 .125 26 11.875C26 18.062 15.938 32 15.938 32zM16 6a4 4 0 100 8 4 4 0 000-8z"/>
    </svg>`

	return new L.DivIcon({
		className: 'test',
		html: svgTemplate,
		iconSize: [40, 40],
		iconAnchor: [12, 24],
		popupAnchor: [7, -16],
	})
}

const MarkerOptions = () => (
	<MapContainer
		className={styles.mapBox}
		center={center}
		zoom={14}
		minZoom={14}
		maxZoom={17}
	>
		<TileLayer
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		/>
		<MarkerClusterGroup>
			{markersData.map((el) => (
				<Marker
					position={[el.lat, el.lng]}
					key={el.lat}
					icon={customMarkerIcon('fe6c58')}
				>
					<Tooltip
						className={styles.tooltip}
						direction="top"
						offset={[8, -22]}
						permanent
					>
						{el.price.toLocaleString('ru')} &#8381;
					</Tooltip>
				</Marker>
			))}
		</MarkerClusterGroup>
	</MapContainer>
)

export default MarkerOptions
