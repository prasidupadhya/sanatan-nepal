import { useEffect } from 'react';
import { useNodesInitialized, useReactFlow } from '@xyflow/react';

/** Include newly revealed cross-branch nodes once their sizes are measured. */
export default function AutoFit({ revision }: { revision: string }) {
  const ready = useNodesInitialized();
  const { fitView } = useReactFlow();
  useEffect(() => {
    if (ready) void fitView({ padding: 0.12, duration: 0 });
  }, [ready, revision, fitView]);
  return null;
}
