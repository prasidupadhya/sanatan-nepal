import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { divIcon } from 'leaflet';
import { Link, useSearchParams } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import { temples } from '../../content/nepali-hinduism/temples';
const pin = divIcon({
  className: 'temple-pin',
  html: '<span aria-hidden="true">◈</span>',
  iconSize: [36, 42],
  iconAnchor: [18, 40],
});
function Focus({ lat, lng, zoom }: { lat: number; lng: number; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], zoom, { animate: false });
  }, [lat, lng, zoom, map]);
  return null;
}
export default function TempleMap() {
  const [params, setParams] = useSearchParams();
  const selected = temples.find((t) => t.id === params.get('temple'));
  const [tileError, setTileError] = useState(false);
  return (
    <section>
      <h2>Follow the sacred geography</h2>
      <p>
        Select a temple pin or choose from the list. Locations are approximate;
        seasonal notes are a guide, not live travel conditions.
      </p>
      <div className="temple-layout">
        <div>
          <div
            className="geo-map"
            role="region"
            aria-label="Interactive Nepal temple map"
          >
            <MapContainer
              center={[28.1, 84.6]}
              zoom={7}
              scrollWheelZoom={false}
              style={{ height: 540, width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                eventHandlers={{ tileerror: () => setTileError(true) }}
              />
              <Focus
                lat={selected?.lat ?? 28.1}
                lng={selected?.lng ?? 84.6}
                zoom={selected ? 10 : 7}
              />{' '}
              {temples.map((t) => (
                <Marker
                  key={t.id}
                  position={[t.lat, t.lng]}
                  icon={pin}
                  title={t.title}
                  alt={t.title + ' temple'}
                  eventHandlers={{
                    click: () => setParams({ temple: t.id }, { replace: true }),
                  }}
                >
                  <Popup>
                    <strong>{t.title}</strong>
                    <p>{t.deity}</p>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          {tileError && (
            <p role="status">
              Map tiles could not load. All temple details remain available
              below.
            </p>
          )}
          <div className="chips" aria-label="Choose a temple">
            {temples.map((t) => (
              <button
                key={t.id}
                aria-pressed={selected?.id === t.id}
                onClick={() => setParams({ temple: t.id }, { replace: true })}
              >
                {t.title}
              </button>
            ))}
          </div>
        </div>
        <aside className="gita-reading" aria-live="polite">
          {selected ? (
            <>
              <span className="step">{selected.region}</span>
              <h3>{selected.title}</h3>
              <h4>{selected.deity}</h4>
              <p>{selected.history}</p>
              <h4>When to visit</h4>
              <p>{selected.visit}</p>
              <Link className="button" to={'/read/temple-' + selected.id}>
                Read temple chapter
              </Link>
              <a
                className="text-link"
                href={selected.source}
                target="_blank"
                rel="noreferrer"
              >
                Cultural reference ↗
              </a>
              <button
                className="text-link"
                onClick={() => {
                  setParams({}, { replace: true });
                }}
              >
                Show all temples
              </button>
            </>
          ) : (
            <>
              <span className="devanagari">तीर्थयात्रा</span>
              <h3>
                Five places.
                <br />
                Many ways of belonging.
              </h3>
              <p>
                Choose a pin to discover the deity, history and seasonal context
                of a sacred place.
              </p>
            </>
          )}
        </aside>
      </div>
    </section>
  );
}
