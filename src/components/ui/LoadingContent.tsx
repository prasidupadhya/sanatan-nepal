export default function LoadingContent() {
  return (
    <div className="loading-content" role="status" aria-label="Loading content">
      <span>Loading content…</span>
      <div className="loading-title" aria-hidden="true" />
      <div className="loading-line" aria-hidden="true" />
      <div className="loading-workspace" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
