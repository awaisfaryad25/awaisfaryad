const BASE_URL = "https://api.the-odds-api.com";
const BASE_PROPHECY = "http://prophecy.codeminer.co:3004/api/v1";
const BASE_LOCAL = "http://localhost:4000/api/v1";


export const endpoints = {
  // Get Api
  getUser: `${BASE_LOCAL}/auth/user`,
  getCricketMatches: `${BASE_URL}/v4/sports/cricket/odds`,
  getTennisMatches: `${BASE_URL}/v4/sports/tennis/odds`,
  getSoccerMatches: `${BASE_URL}/v4/sports/soccer/odds`,
  getFootbalMatches: `${BASE_URL}/v4/sports/americanfootball/odds`,
  
  // Get Api
  postLogin: `${BASE_PROPHECY}/auth/login`,
  postSignUp: `${BASE_LOCAL}/auth/signup`,

}
