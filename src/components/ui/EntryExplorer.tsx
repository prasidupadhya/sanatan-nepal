import { lazy, Suspense, type ComponentType } from 'react';
import LoadingContent from './LoadingContent';

const TempleMap = lazy(() => import('../map/TempleMap'));
const FestivalWheel = lazy(() => import('../festival-wheel/FestivalWheel'));
const DeityExplorer = lazy(() => import('../tree/DeityExplorer'));
const TraditionExplorer = lazy(() => import('../nepal/TraditionExplorer'));
const GitaExplorer = lazy(() => import('../gita-explorer/GitaExplorer'));
const RamayanaExplorer = lazy(() => import('../epics/RamayanaExplorer'));
const MahabharataExplorer = lazy(() => import('../epics/MahabharataExplorer'));

const explorers: Record<string, ComponentType<{ id: string }>> = {
  temples: TempleMap,
  festivals: FestivalWheel,
  shiva: DeityExplorer,
  vishnu: DeityExplorer,
  devi: DeityExplorer,
  dashavatara: DeityExplorer,
  kumari: TraditionExplorer,
  'newar-hinduism': TraditionExplorer,
  monarchy: TraditionExplorer,
  mahabharata: MahabharataExplorer,
  ramayana: RamayanaExplorer,
  'bhagavad-gita': GitaExplorer,
};
export function hasExplorer(id: string) {
  return Object.hasOwn(explorers, id);
}
export default function EntryExplorer({ id }: { id: string }) {
  const Explorer = hasExplorer(id) ? explorers[id] : undefined;
  return Explorer ? (
    <Suspense fallback={<LoadingContent />}>
      <Explorer key={id} id={id} />
    </Suspense>
  ) : null;
}
