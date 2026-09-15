import FamilyTree from '../tree/FamilyTree';
import StoryMode from '../story/StoryMode';
import {
  raghuPeople,
  raghuRelations,
  ramayanaScenes,
} from '../../content/epics/ramayana';
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  Polyline,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const stops: { name: string; point: [number, number]; text: string }[] = [
  {
    name: 'Ayodhya',
    point: [26.8, 82.2],
    text: 'Departure from the royal city.',
  },
  {
    name: 'Chitrakoot',
    point: [25.2, 80.9],
    text: 'An early forest dwelling in the tradition.',
  },
  {
    name: 'Panchavati / Nashik',
    point: [20.0, 73.8],
    text: 'A traditional association with the forest narrative and Sita’s abduction.',
  },
  {
    name: 'Kishkindha / Hampi',
    point: [15.3, 76.5],
    text: 'Traditionally associated with the kingdom of Rama’s allies.',
  },
  {
    name: 'Rameswaram',
    point: [9.29, 79.31],
    text: 'Associated with the crossing toward Lanka.',
  },
  {
    name: 'Lanka (Sri Lanka association)',
    point: [7.3, 80.7],
    text: 'Island-level traditional association; a precise epic location is not established.',
  },
];
export default function RamayanaExplorer() {
  return (
    <>
      <FamilyTree
        title="The Ikshvaku / Raghu lineage"
        people={raghuPeople}
        relations={raghuRelations}
      />
      <StoryMode scenes={ramayanaScenes} />
      <h2>Trace the exile journey</h2>
      <p>
        Traditional geographic associations, linked schematically. These lines
        are neither travel directions nor an archaeologically established route.
        Janakpur, north-east of Ayodhya, belongs to the marriage narrative
        before exile.
      </p>
      <div
        className="geo-map"
        role="region"
        aria-label="Map of traditional Ramayana locations"
      >
        <MapContainer
          center={[18, 80]}
          zoom={4}
          scrollWheelZoom={false}
          style={{ height: 450, width: '100%' }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Polyline
            positions={stops.map((s) => s.point)}
            color="#9b402e"
            dashArray="8 7"
          />
          {stops.map((s) => (
            <CircleMarker
              key={s.name}
              center={s.point}
              radius={8}
              pathOptions={{
                color: '#421d27',
                fillColor: '#e0b66c',
                fillOpacity: 1,
              }}
            >
              <Popup>
                <strong>{s.name}</strong>
                <p>{s.text}</p>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
      <div className="chapter-list">
        {stops.map((s, i) => (
          <details key={s.name}>
            <summary>
              {i + 1}. {s.name}
            </summary>
            <p>{s.text}</p>
          </details>
        ))}
      </div>
    </>
  );
}
