
const API_KEY = process.env.API_KEY

module.exports = {
  reactStrictMode: true,  
  async redirects() {
    return [{
      // 1. 특정 웹페이지 경로 접속시 리다이렉트 가능(서버 재시작해야함)
      source:"/contact",
      destination:"/form",
      permanent: false,
      // 2. 중간 경로를 변경하고 POST ID 같은 고유 값은 그대로 가져올 수 있음
      source:"/old-blog/:path*",
      destination:"/new-blog/:path*",
      permanent: false,
    }]
  },
  async rewrites() {
    // Redirect와 같은 역할을 수행하지만 유저에게 변화된 url을 보이지 않음
    return [{
      source: "/api/movies",
      destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    }]
  }
}
