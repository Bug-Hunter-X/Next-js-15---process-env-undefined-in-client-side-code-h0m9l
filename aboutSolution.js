```javascript
// pages/api/env.js

export default function handler(req, res) {
  res.status(200).json({ myVariable: process.env.MY_VARIABLE });
}
```

```javascript
// pages/about.js
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function About() {
  const { data, error } = useSWR('/api/env', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>About Page</h1>
      <p>My variable: {data.myVariable}</p>
    </div>
  );
}
```