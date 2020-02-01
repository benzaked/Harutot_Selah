import "react-native";
import React from "react";
import {
    data
} from "./mocks/dataMock";
import GallerySwiper from "./../src/";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

test("Gallery Swiper renders correctly", () => {
    const gallerySwiper = renderer.create(<GallerySwiper images={data} />).toJSON();

    const scrollView = gallerySwiper.children[0];

    expect(scrollView.type).toBe("RCTScrollView");
    expect(gallerySwiper.props.images.length).toBeGreaterThan(0);
});
