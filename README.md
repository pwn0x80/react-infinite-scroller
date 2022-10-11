# react-infinite-scroller

## Install

```js
  npm i @pwn0x80/react-infinite-scroller

  or

  yarn i @pwn0x80/react-infinite-scroller

  // in code ES6
  import { useInfiniteScroller } from '@pwn0x80/react-infinite-scroller';
```

## Usage- 

- InfiniteScroll - HOC Components
- scrollFetch - to determine when to initiate a re-render phase 
```js
const {  scrollFetch, InfiniteScroll } = useInfiniteScroller()
const [offsetState, setoffsetState] = useState(0);
const [sampleState, setSampleState] = useState([])

useEffect(() => {
    setoffsetState(e => e + 20);
  }, [scrollFetch])
  
```
## executing fetch request 

```js
useEffect(() => {
    try {
      (async () => { 
        let limit = 15
        let url = baseUrl + "/json/stations/byname/" + genresSelectfilter + `?limit=${limit}&offset=${offsetState}`
        let data = await fetch(url)
        let exampleList = await data.json()
        setSampleState(e => [...e, ...exampleList]);

      })()
    } catch {
      console.log("error")
    }
  }, [offsetState])
```

Infinite Scroll works on a HOC components with its child item elements.
```js
sampleState.map((e, keys) => {
return (
  <InfiniteScroll len={sampleState.length} >
       <MainContentOption key={keys} >{e.name}</MainContentOption>
  </InfiniteScroll>
  
)})
```

## Sample-
https://github.com/pwn0x80/radio/blob/main/src/components/contentBox/ContentBox.jsx#L6
https://github.com/pwn0x80/radio/blob/main/src/page/Genres/GenresList.jsx#L15

by pwn0x80 :)
