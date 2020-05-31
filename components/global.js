import React ,  {Component} from 'react';
import {Dimensions} from 'react-native';
import resolveAssetSource from 'resolveAssetSource';
const userName =''
const photoUrl = ''
const userId = ''
var score=0
var messege='' 
var firtSiteVisit=-1
var totalNumberOfQiueses=0

const Daniellongitude =  34.8026007//Elena
const Daniellatitude = 31.2658581 //Elena

let icon =  require('../assets/gameBanner.png'); 
let source = resolveAssetSource(icon);
const gameHeight=((Dimensions.get('window').height)-((Dimensions.get('window').width*source.height)/source.width));

export default {
  score,
  messege,
  firtSiteVisit,
  totalNumberOfQiueses,
  gameHeight,

  sites :[
    {id:0,wasOnsite :1, latitude: 30.8214602, longitude: 34.7415208, //real start point from daniel
    // {id:0,wasOnsite :1, latitude: Daniellatitude , longitude: Daniellongitude, //elena check
      marker :'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/Map%20markers%2F0.png?alt=media&token=f6726d9b-5c42-4013-898a-a36f006d3dfd'}, 
    // {id:1,wasOnsite :0, latitude: Daniellatitude, longitude:Daniellongitude, 
    {id:1,wasOnsite :0, latitude: 30.8222114, longitude: 34.7420800,
      marker :'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/Map%20markers%2F1.png?alt=media&token=4027278c-f489-47de-96b6-abb9e09a6c4b', 
      imageBig : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/1.jpg?alt=media&token=bbe8e00a-a52c-4179-8f2f-6d2756010ce5'}, 
    {id:2,wasOnsite :0, latitude: 30.8219382, longitude: 34.7430979, 
    // {id:2,wasOnsite :0, latitude: 30.8212587, longitude: 34.7430979,  //elena check
      marker : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/Map%20markers%2F2.png?alt=media&token=af3cadee-7fef-457c-823d-4fd19a1695fa', 
      imageBig : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/2.jpg?alt=media&token=a2730f4e-bb8b-4d0c-9869-eb50e6f674fe'}, 
    {id:3,wasOnsite :0, latitude: 30.8212587, longitude:34.7428584,
    // {id:3,wasOnsite :0, latitude: 31.272465, longitude:34.797966, //elena check34.7428584,30.8212587
      marker : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/Map%20markers%2F3.png?alt=media&token=72fd5026-71ce-4520-b63b-c06d68775e8c', 
      imageBig : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/3.jpg?alt=media&token=512c7954-ada1-408f-99a4-bf968300fc25'}, 
    {id:4,wasOnsite :0, latitude: 30.8211714, longitude:34.7420160,
    // {id:4,wasOnsite :0, latitude: 31.273084, longitude:34.797751, //elena check
      marker : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/Map%20markers%2F4.png?alt=media&token=b3e55dbf-b114-4513-846e-c6832b1daf28', 
      imageBig : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/4.jpg?alt=media&token=36094b83-3bb2-477e-9b50-2cb18b905030'}, 
    {id:5,wasOnsite :0, latitude: 30.8217195, longitude:34.7448290, 
    // {id:5,wasOnsite :0, latitude: Daniellatitude, longitude:Daniellongitude, 
      marker : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/Map%20markers%2F5.png?alt=media&token=60e91133-0ea5-458a-8ea2-3ea50f5cc971', 
      imageBig : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/5.jpg?alt=media&token=f2fc9ee1-87ce-42cd-9dbc-92d4d9b1a2ba'}, 
    {id:6,wasOnsite :0, latitude: 30.819229135572883, longitude:34.74410494789481, 
      marker : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/Map%20markers%2F6.png?alt=media&token=136e7346-baf5-41a4-9181-c8899b8c60a1',
      imageBig : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/6.jpg?alt=media&token=f756f880-ad70-4b85-b57e-75a8507ae574'} , 
    {id:7,wasOnsite :0, latitude: 30.81998224218225, longitude:34.74232463166118, 
      marker : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/Map%20markers%2F7.png?alt=media&token=b90c6eb3-292e-4729-9443-fba61ef68535', 
      imageBig : 'https://firebasestorage.googleapis.com/v0/b/finalprojectrn.appspot.com/o/7.jpg?alt=media&token=9dd4d690-8c66-44d4-a14c-3402eb1c22f8'}, 
  ],
      }