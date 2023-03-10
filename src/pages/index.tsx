import { Link } from 'react-router-dom';

export default function IndexPage() {
  return (
    <div>
      <h3>index page</h3>
      <p>
        go to <Link to="/posts">posts</Link>
      </p>
    </div>
  );
}
