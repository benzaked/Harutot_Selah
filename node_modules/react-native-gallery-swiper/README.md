<a href="https://luehangs.site/lue_hang/projects/react-native-gallery-swiper"><img src="https://luehangs.site/images/react-native-gallery-swiper-main.jpg" alt="react-native-gallery-swiper"/></a>

<h1 align="center">
    React Native Gallery Swiper
</h1>

An easy and simple to use React Native component to render a high performant and easily customizable image gallery with common gestures like pan, pinch and double tap.  Supporting both iOS and Android. Free and made possible along with costly maintenance and updates by [Lue Hang](https://www.facebook.com/lue.hang) (the author).

Learn more about the installation and how to use this package in the updated [documentation](https://luehangs.site/lue_hang/projects/react-native-gallery-swiper) page.

- Supports smart rendering for **large lists** or small.
- Scroll loading and supporting `onEndReached`.
- Includes guestures and important event listeners for pan, pinch, single tap and double tap.
- Includes zoom mode.
- Easily customizable.
- Intelligent scrolling detection to cushion rough swipe guestures.
- Supports both iOS and Android.

<br/>
<br/>
<a href="https://luehangs.site"><img src="https://luehangs.site/images/lh-blog-strip.jpg" alt="LueHsoft LueH LABS Lue Hang luehang"/></a>

<br/>
<br/>
<br/>

---
<br/>
<br/>
<br/>

<h1 align="center">
    <img src="https://www.luehangs.site/videos/react-native-gallery-swiper-demo.gif" alt="react-native-gallery-swiper" />
</h1>

#### :information_source: Learn more about React Native with project examples along with Cyber Security and Ethical Hacking at [LueHsoft](https://www.luehangs.site).

<br/>
<br/>
<br/>

---
<br/>
<br/>
<br/>

# :open_file_folder: Index

### 1.  [Install](#gem-install)
### 2.  [Usage Example](#tada-usage-example)
### 3.  [Performance Optimization List Example](#watch-performance-optimization-list-example)
### 4.  [API](#nut_and_bolt-api)
### 5.  :books: [Props](#books-props)
### 6.  :books: [Methods](#books-methods)
### 7.  [Example Project](#clapper-example-project)
### 8.  [Author](#santa-author)
### 9.  [Contribute](#clap-contribute)
### 10.  [License](#page_facing_up-license)

<br/>
<br/>
<br/>

---
<br/>
<br/>
<br/>

## :gem: Install

Type in the following to the command line to install the dependency.

```bash
$ npm install --save react-native-gallery-swiper
```

or

```bash
$ yarn add react-native-gallery-swiper
```

<br/>
<br/>
<br/>

---
<br/>
<br/>
<br/>

## :tada: Usage Example

Add an ``import`` to the top of the file.  At minimal, declare the ``GallerySwiper`` component in the ``render()`` method providing an array of data for the ``images`` prop.

#### :information_source: Local images must have a defined `dimensions` field with `width` and `height` or just `height` and `width`.

> If you like [`react-native-gallery-swiper`](https://github.com/Luehang/react-native-gallery-swiper), please be sure to give it a star at [GitHub](https://github.com/Luehang/react-native-gallery-swiper). Thanks.

```javascript
import GallerySwiper from "react-native-gallery-swiper";

//...
render() {
    return (
        <GallerySwiper
            images={[
                // Version *1.1.0 update (or greater versions): 
                // Can be used with different image object fieldnames.
                // Ex. source, source.uri, uri, URI, url, URL
                { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg" },
                { source: require("yourApp/image.png"),
                    // IMPORTANT: It is REQUIRED for LOCAL IMAGES
                    // to include a dimensions field with the
                    // actual width and height of the image or
                    // it will throw an error.
                    dimensions: { width: 1080, height: 1920 } },
                { source: require("yourApp/image.png"),
                    // Version *1.5.0 update (or greater versions):
                    // An alternative to the dimensions field.
                    // This will also be acceptable.
                    width: 1080,
                    height: 1920 },
                { source: { uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg" } },
                { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg" },
                { URI: "https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg" },
                { url: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg" },
                { URL: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },
            ]}
            // Version *1.15.0 update
            // onEndReached={() => {
            //     // add more images when scroll reaches end
            // }}
        />
    );
}
//...
```

<br/>
<br/>
<br/>

---
<br/>
<br/>
<br/>

## :watch: Performance Optimization List Example

> If you like [`react-native-gallery-swiper`](https://github.com/Luehang/react-native-gallery-swiper), please be sure to give it a star at [GitHub](https://github.com/Luehang/react-native-gallery-swiper). Thanks.

```javascript
import GallerySwiper from "react-native-gallery-swiper";

//...
render() {
    return (
        <GallerySwiper
            images={[
                { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg",
                    // Optional: Adding a dimensions or height and
                    // width field with the actual width and height
                    // for REMOTE IMAGES will help improve performance.
                    dimensions: { width: 1080, height: 1920 } },
                { uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg",
                    dimensions: { width: 1080, height: 1920 } },
                { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg",
                    dimensions: { width: 1080, height: 1920 } },
                { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg",
                    dimensions: { width: 1080, height: 1920 } },
                { uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg",
                    dimensions: { width: 1080, height: 1920 } },
                { uri: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg",
                    dimensions: { width: 1920, height: 1080 } },
                // ...
                // ...
                // ...
            ]}
            // Version *1.15.0 update
            // onEndReached={() => {
            //     // add more images when scroll reaches end
            // }}
            // Change this to render how many items before it.
            initialNumToRender={2}
            // Turning this off will make it feel faster
            // and prevent the scroller to slow down
            // on fast swipes.
            sensitiveScroll={false}
        />
    );
}
//...
```

<br/>
<br/>
<a href="https://luehangs.site/marketplace/product/RN%20Posting%20Demo%20App%20Kit"><img src="https://luehangs.site/images/lh-mobile-strip.jpg" alt="LueHsoft LueH LABS Lue Hang luehang"/></a>
<br/>
<br/>

## :nut_and_bolt: API

``<GallerySwiper />`` component accepts the following props...

<br/>

# :books: Props

> If you like [`react-native-gallery-swiper`](https://github.com/Luehang/react-native-gallery-swiper), please be sure to give it a star at [GitHub](https://github.com/Luehang/react-native-gallery-swiper). Thanks.

Props | Description | Type | Default
------ | ------ | ------ | ------
`images` | An array of objects.  `source`, `source.uri`, `uri`, `URI`, `url` or `URL` is a required field (if multiple similar fields in an image object, priority will go from start `source` to last `URL`). EX. `[{ source: require("yourApp/image.png"), dimensions: { width: 1080, height: 1920 } }, { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg", dimensions: { width: 1080, height: 1920 } }, { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg"}]` | `Array` | Required
`style` | Styling the gallery. | `object`, `Array` | `{flex: 1, backgroundColor: "#000"}`
`initialPage` | Index of image to be displayed first. | `number` | `0`
`resizeMode` | The mechanism that should be used to resize the image when the image's dimensions differ from the image view's dimensions. Expecting one of `"contain"`, `"cover"`, `"stretch"`, `"repeat"`, `"center"`. **Version \*1.12.0 update**. | `string` | `"contain"`
`imageComponent` | Custom function to render your images. `(imageProps: { imageLoaded: boolean, source: object, image: object, style: Array<object>, resizeMode: string, capInsets: object, onLoadStart: Function, onLoad: Function, ...extras }, imageDimensions: {width: number, height: number}, index: number) => React.Element` **index params included in Version \*1.3.1 update** | `Function` | `<Image/>` component
`errorComponent` | Custom function to render the page of an image that couldn't be displayed. | `Function` | A `<View/>` with a stylized error
`initialNumToRender` | How many items to render in the initial batch. **Version \*1.3.0 update**. | `number` | `3`
`flatListProps` | Props to be passed to the underlying `FlatList`. | `object` | `{windowSize: 3}`
`pageMargin` | Blank margin space to show between images. | `number` | `0`
`sensitiveScroll` | Detect rough and fast swiping gestures in order to "cushion" or slow down a swipe at the end. **Version \*1.4.0 update**. | `boolean` | `true`
`onPageSelected` | Fired with the index of page that has been selected. `(index: number) => void` | `Function`
`onPageScrollStateChanged` | Called when page scrolling state has changed, see [scroll state and events](#scroll-state-and-events). `(state: string) => void` | `Function`
`onPageScroll` | Scroll event, see [scroll state and events](#scroll-state-and-events). `(event: { position: number, offset: number, fraction: number }) => void` | `Function`
`scrollViewStyle` | Custom style for the `FlatList` component. | `object` | `{}`
`onDoubleTapConfirmed` | Executed after a double tap. `(index: number) => void` **Version \*1.8.0 update** | `Function`
`onSingleTapConfirmed` | Executed after a single tap. `(index: number) => void` | `Function`
`onLongPress` | Executed after a long press. `(gestureState: object, index: number) => void` **index params in Version \*1.10.0 update**. | `Function`
`onViewTransformed` | Executed while being transformed in anyway (view transformer). `(transform: { scale: number, translateX: number, translateY: number }, index: number) => void` **Version \*1.16.0 update**. | `Function`
`onPinchTransforming` | Executed while pinching to transform view or zoom (view transformer). `(transform: { scale: number, translateX: number, translateY: number }, index: number) => void` **Version \*1.17.0 update**. | `Function`
`onPinchStartReached` | Executed after scaling out or zooming out to initial size using the pinch gesture. `(transform: { scale: number, translateX: number, translateY: number }, index: number) => void` **Version \*1.18.0 update**. | `Function`
`onPinchEndReached` | Executed after scaling in or zooming in to `maxScale` using the pinch gesture. `(transform: { scale: number, translateX: number, translateY: number }, index: number) => void` **Version \*1.18.0 update**. | `Function`
`onTransformGestureReleased` | Executed after a transform guesture released (view transformer). `(transform: { scale: number, translateX: number, translateY: number }, index: number) => void` **Version \*1.16.0 update**. | `Function`
`onSwipeUpReleased` | Executed after releasing an upward swipe at a specific y translate while not in zoom mode. `(transform: { scale: number, translateX: number, translateY: number }, index: number) => void` For custom precision swiping gestures, refer to the `onTransformGestureReleased`. **Version \*1.25.0 update**. | `Function`
`onSwipeDownReleased` | Executed after releasing a downward swipe at a specific y translate while not in zoom mode. `(transform: { scale: number, translateX: number, translateY: number }, index: number) => void` For custom precision swiping gestures, refer to the `onTransformGestureReleased`. **Version \*1.25.0 update**. | `Function`
`onDoubleTapStartReached` | Executed after scaling out or zooming out using double tap. `(transform: { scale: number, translateX: number, translateY: number }, index: number) => void` **Version \*1.17.0 update**. | `Function`
`onDoubleTapEndReached` | Executed after scaling in or zooming in using double tap. `(transform: { scale: number, translateX: number, translateY: number }, index: number) => void` **Version \*1.17.0 update**. | `Function`
`onEndReached` | Called once when the page index gets within the `onEndReachedThreshold` of the `images` content. `() => void` **Version \*1.15.0 update**. | `Function`
`onEndReachedThreshold` | How far from the end (in units of visible length of the list) of the list of images must be from the end of the content to trigger the `onEndReached` callback. Thus a value of 0.5 will trigger `onEndReached` when the end of the content is within half the visible length of the images. **Version \*1.15.0 update**. | `number` | `0.5`
`enableScale` | Enable or disable zoom and double tap zoom (view transformer). **Version \*1.9.0 update**. | `boolean` | `true`
`maxScale` | Max zoom (view transformer). **Version \*1.17.0 update**. | `number` | `Math.max(imageWidth / viewWidth, imageHeight / viewHeight)`
`enableTranslate` | Enable or disable moving while in zoom (view transformer). **Version \*1.11.0 update**. | `boolean` | `true`
`enableResistance` | Enable or disable resistance over panning (view transformer). **Version \*1.14.0 update**. | `boolean` | `true`
`resistantStrHorizontal` | Resistant value for left and right panning (view transformer). `(dx: number) => number` **Version \*1.14.0 update**. | `Function`, `number` or `string` | `(dx) => (dx /= 3)`
`resistantStrVertical` | Resistant value for top and bottom panning (view transformer). `(dy: number) => number` **Version \*1.14.0 update**. | `Function`, `number` or `string` | `(dy) => (dy /= 3)`
`maxOverScrollDistance` | A number used to determine final scroll position triggered by fling (view transformer). **Version \*1.16.0 update**. | `number` | `20`
`removeClippedSubviews` | To improve scroll performance for large lists. **Version \*1.4.1 update**. | `boolean` | `true`
`refPage` | The `ref` for the inner View page. **Version \*1.2.0 update**. Learn more about this at the [helpful hints section](https://luehangs.site/lue_hang/projects/react-native-gallery-swiper#helpful-hints) | `Function`

<br/>
<br/>
<br/>

---
<br/>
<br/>
<br/>

# :books: Methods

### :small_blue_diamond: ``flingToPage(params)``

Scrolls to the following index with input velocity.

<br/>

#### Parameters:

Name | Type | Required | Description
------ | ------ | ------ | ------
params | object | YES | See below.

Valid params keys are:

- "index" (number) - Index of desired page. Required.
- "velocityX" (boolean) - Speed intensity > 0.00. Required.

<br/>

### :small_blue_diamond: ``scrollToPage(params)``

Scrolls to the following index with or without animation.

<br/>

#### Parameters:

Name | Type | Required | Description
------ | ------ | ------ | ------
params | object | YES | See below.

Valid params keys are:

- "index" (number) - Index of desired page. Required.
- "immediate" (boolean) - Animated transition or not. Defaults to `false`.

<br/>
<br/>
<a href="https://luehangs.site/marketplace/product/RN%20Posting%20Demo%20App%20Kit"><img src="https://luehangs.site/images/lh-mobile-strip.jpg" alt="LueHsoft LueH LABS Lue Hang luehang"/></a>
<br/>
<br/>

## :clapper: Example Project

Perform steps 1-2 to run locally:

1. [Clone the Repo](#1-clone-the-repo)
2. [Install and Run](#2-install-and-run)

### :small_blue_diamond: 1. Clone the Repo

**Clone** `react-native-gallery-swiper` locally. In a terminal, run:

```bash
$ git clone https://github.com/Luehang/react-native-gallery-swiper.git react-native-gallery-swiper
```

### :small_blue_diamond: 2. Install and Run

```bash
$ cd react-native-gallery-swiper/example/
```

#### iOS - Mac - Install & Run

	1. check out the code
	2. npm install
	3. npm run ios

#### Android - Mac - Install & Run

	1. check out the code
	2. npm install
	3. emulator running in separate terminal
	4. npm run android

<br/>
<br/>
<a href="https://luehangs.site"><img src="https://luehangs.site/images/lh-blog-strip.jpg" alt="LueHsoft LueH LABS Lue Hang luehang"/></a>
<br/>
<br/>

<br/>
<br/>
<br/>

---
<br/>
<br/>
<br/>

## :santa: Author

<a href="https://www.facebook.com/lue.hang">
<img src="https://www.luehangs.site/images/lue-hang2018-circle-150px.png"/>
</a>

Free and made possible along with costly maintenance and updates by [Lue Hang](https://www.facebook.com/lue.hang) (the author).

<br/>
<br/>
<br/>

---
<br/>
<br/>
<br/>

## :clap: Contribute

[Pull requests](https://github.com/Luehang/react-native-gallery-swiper/pulls) are welcomed.

<br/>

### :tophat: Contributors

Contributors will be posted here.

<br/>

### :baby: Beginners

Not sure where to start, or a beginner? Take a look at the [issues page](https://github.com/Luehang/react-native-gallery-swiper/issues).

<br/>
<br/>
<br/>

---
<br/>
<br/>
<br/>

## :page_facing_up: License

MIT © [Lue Hang](https://luehangs.site), as found in the LICENSE file.
