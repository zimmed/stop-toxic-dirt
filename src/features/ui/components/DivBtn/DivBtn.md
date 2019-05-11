Basic example:

```
<DivBtn action={() => window.alert('Button click!')}>My Button</DivBtn>
```

Example using `disabled` attribute:

```

<div>
  <DivBtn action={() => window.alert('enabled!')} disabled={false}>
    <div style={{
      padding: '1em',
      border: '1px solid black',
      margin: '1em',
      background: '#efefef',
      textAlign: 'center',
      maxWidth: '12em',
    }}>
      Enabled
    </div>
  </DivBtn>

  <DivBtn action={() => window.alert('disabled!')} disabled={true}>
    <div style={{
      padding: '1em',
      border: '1px solid black',
      margin: '1em',
      background: '#c0c0c0',
      textAlign: 'center',
      maxWidth: '12em',
      fontStyle: 'italic',
    }}>
      Disabled
    </div>
  </DivBtn>
</div>
```
