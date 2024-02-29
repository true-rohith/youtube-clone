export const BASE_URL = "https://www.googleapis.com/youtube/v3";
export const API_KEY = "AIzaSyAR0u8mo_0YNJVMNLZnGyoLdOjK2UrW-DI";
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;
export const YOUTUBE_CHANNEL_API = `https://youtube.googleapis.com/youtube/v3/channelSections?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=${API_KEY}`;
