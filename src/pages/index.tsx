import { Link } from 'react-router-dom';

export default function IndexPage() {
  return (
    <div>
      <h3>Hello everyone~</h3>
      <p>
        <Link to="/posts">posts</Link>
      </p>
      <p>
        <Link to="/Sakina/bookmark">Sakina bookmark</Link>
      </p>
    </div>
  );
}
