import React ,  {Component} from 'react';
import {Dimensions} from 'react-native';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
const userName =''
const photoUrl = ''
const userId = ''
const userEmail = ''
const ownerEmail = ['Joshua@adssc.org', 'benzaked@post.bgu.ac.il']
var score=0
var messege='' 
var firtSiteVisit=-1
var totalNumber=0


const Daniellongitude =  34.7985389 //Elena
const Daniellatitude = 31.2708640 //Elena

let icon =  require('../assets/gameBanner.png'); 
let source = resolveAssetSource(icon);
const gameHeight=((Dimensions.get('window').height)-((Dimensions.get('window').width*source.height)/source.width));

export default {
  score,
  messege,
  firtSiteVisit,
  totalNumber,
  gameHeight,
  ownerEmail,
  sites :[
    {id:0,wasOnsite :1, latitude: 30.8214602, longitude: 34.7415208, //real start point from daniel
    // {id:0,wasOnsite :1, latitude: Daniellatitude , longitude: Daniellongitude, //elena check
      marker :'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/Map%20markers%2F0.png?alt=media&token=d0cb463c-fcb3-4b1e-9986-4abdbbeee9ee'}, 
      // {id:1,wasOnsite :0, latitude: Daniellatitude , longitude: Daniellongitude,
      // {id:1,wasOnsite :0, latitude: 31.271332, longitude: 34.798100, //elena check
    {id:1,wasOnsite :0, latitude: 30.8222114, longitude: 34.7420800,//real point
      marker :'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/Map%20markers%2F1.png?alt=media&token=bf1e7363-9d90-4bb7-b9c6-a985cc81166e', 
      imageBig : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/1.jpg?alt=media&token=bbe8e00a-a52c-4179-8f2f-6d2756010ce5'}, 
    {id:2,wasOnsite :0, latitude: 30.8219382, longitude: 34.7430979, //real point
      marker : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/Map%20markers%2F2.png?alt=media&token=a73c8eb3-c737-4bff-bc05-8cb32ce3252d', 
      imageBig : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/2.jpg?alt=media&token=a2730f4e-bb8b-4d0c-9869-eb50e6f674fe'}, 
    {id:3,wasOnsite :0, latitude: 30.8212587, longitude:34.7428584,//real point
    // {id:3,wasOnsite :0, latitude: 31.272465, longitude:34.797966, //elena check
      marker : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/Map%20markers%2F3.png?alt=media&token=c2fe95dc-e9c9-4362-952f-76fa49343018', 
      imageBig : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/3.jpg?alt=media&token=512c7954-ada1-408f-99a4-bf968300fc25'}, 
    {id:4,wasOnsite :0, latitude: 30.8211714, longitude:34.7420160,//real point
    // {id:4,wasOnsite :0, latitude: 31.2712001, longitude:34.7985630, //elena check
      marker : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/Map%20markers%2F4.png?alt=media&token=2fc6fe99-ad5d-47a3-ad39-a97a7d2d83d7', 
      imageBig : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/4.jpg?alt=media&token=36094b83-3bb2-477e-9b50-2cb18b905030'}, 
    {id:5,wasOnsite :0, latitude: 30.8217195, longitude:34.7448290, //real point
    // {id:5,wasOnsite :0, latitude: Daniellatitude, longitude:Daniellongitude, 
      marker : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/Map%20markers%2F5.png?alt=media&token=64bd8eff-6f3b-4760-ba1f-80a82937c3ef', 
      imageBig : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/5.jpg?alt=media&token=f2fc9ee1-87ce-42cd-9dbc-92d4d9b1a2ba'}, 
    {id:6,wasOnsite :0, latitude: 30.819229135572883, longitude:34.74410494789481, //real point
      marker : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/Map%20markers%2F6.png?alt=media&token=c740eec7-9d01-472c-abf7-780464930f0b',
      imageBig : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/6.jpg?alt=media&token=f756f880-ad70-4b85-b57e-75a8507ae574'} , 
    {id:7,wasOnsite :0, latitude: 30.81998224218225, longitude:34.74232463166118, //real point
      marker : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/Map%20markers%2F7.png?alt=media&token=b1514fb2-d009-4805-a583-6f51323ca9d5', 
      imageBig : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/7.jpg?alt=media&token=9dd4d690-8c66-44d4-a14c-3402eb1c22f8'}, 
  ],
      }