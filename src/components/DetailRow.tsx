function DetailRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <span className="text-secondary">{label}</span>
      <span
        className="fw-semibold"
        style={highlight ? { color: "rgba(190,175,10,0.874)" } : {}}
      >
        {value}
      </span>
    </div>
  );
}

export default DetailRow;
