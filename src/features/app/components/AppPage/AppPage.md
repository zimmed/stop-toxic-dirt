Example usage:

```
const routes = [
  { path: '/', title: 'Home' },
  { path: '/about', title: 'About' },
];

<AppPage demo={true} routes={routes} selectedPath="/" >
  <div className="Home">
    <h1>Welcome!</h1>
    <p>This is the home page.</p>
    <p>It will be generated inside the body of the AppPage which contains the header and navigation.</p>
  </div>
</AppPage>
```
