const CrossIcon = ({ size = 24, color = "black" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="2" y1="2" x2="22" y2="22" stroke={color} strokeWidth="2" />
    <line x1="2" y1="22" x2="22" y2="2" stroke={color} strokeWidth="2" />
  </svg>
);

export default CrossIcon;
