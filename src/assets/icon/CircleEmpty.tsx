const CircleEmpty = ({ onClick }: { onClick?: () => void }) => (
  <svg onClick={onClick} className="cursor-pointer circle-empty" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="5" />
  </svg>
);

export default CircleEmpty;
